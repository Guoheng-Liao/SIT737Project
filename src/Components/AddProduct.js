import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { saveProduct, ListProduct, deleteProduct } from '../Action/ProductAction';


export default function AddProduct(props) {
    const [ModalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');

    const ProductList = useSelector(state=>state.ProductList);
    const {loadiing, products, error} = ProductList;

    const ProductSave = useSelector(state=>state.ProductSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = ProductSave;

    const ProductDelete = useSelector(state=>state.ProductDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = ProductDelete;
    const dispatch = useDispatch();

    useEffect(() => {
        if(successSave){
            setModalVisible(false);
        }
        dispatch(ListProduct());
        // if(successSave){
            // setModalVisible(false);
        // }
        return () => {
            //
        };
    }, [successSave, successDelete]);

    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setDescription(product.description);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({
            _id: id, 
            name, price, image, brand, category, countInStock, description 
        }));
    }

    const deleteHandler = (product) =>{
        dispatch(deleteProduct(product._id));
    }

    return  (


        <div className="content content-margined">
            <div className="product-header">
                <h3>Products</h3>
                <button className="button btn-bg" onClick={() => openModal({})}>Create Product</button>
            </div>

{ ModalVisible &&
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h3>Create New Product</h3>
                        </li>
                        <li>
                            {loadingSave && <div>Loading...</div>}
                            {errorSave && <div>{errorSave}</div>}
                        </li>
                        
                        <li>
                            <label className="label-title" htmlFor="name">Nmae</label>
                            <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label className="label-title" htmlFor="price">Price</label>
                            <input type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label className="label-title" htmlFor="image">Image</label>
                            <input type="text" name="image" value={image} id="image" onChange={(e) => setImage(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label className="label-title" htmlFor="brand">Brand</label>
                            <input type="text" name="brand" value={brand} id="brand" onChange={(e) => setBrand(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label className="label-title" htmlFor="category">Category</label>
                            <input type="text" name="category" value={category} id="category" onChange={(e) => setCategory(e.target.value)} >
                            </input>
                        </li>
                        <li>
                            <label className="label-title" htmlFor="countInStock">Count In Stock</label>
                            <input type="text" name="countInStock" value={countInStock} id="countInStock" onChange={(e) => setCountInStock(e.target.value)} >
                            </input>
                        </li>
                        <li>
                            <label className="label-title" htmlFor="description">Description</label>
                            <textarea name="description" value={description} id="description" onChange={(e) => setDescription(e.target.value)} >
                            </textarea>
                        </li>
                        <li>
                            <button type="submit" className="button btn-bg">{id ?"Update": "Create"}</button>
                        </li>
                        <li>
                            <button type="button" onClick={()=>setModalVisible(false)} className="button btn-bg-2">Back</button>
                        </li>
                    </ul>
                </form>
            </div>}

            <div className="product-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (    
                        <tr key={product._id}>
                            <td>{ProductList.id}</td>
                            <td>{ProductList.name}</td>
                            <td>{ProductList.price}</td>
                            <td>{ProductList.category}</td>
                            <td>{ProductList.brand}</td>
                            <td>
                                <button className="button" onClick={()=>openModal(product)}>Edit</button>
                                {"  "}
                                <button className="button" onClick={deleteHandler(product)}>Delete</button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    );
    
}

// import React, { Component } from 'react';
// import Axios from 'axios';
// import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

// export default class AddProduct extends Component {
//     constructor(props) {
//         super(props);

//         this.onChangeName = this.onChangeName.bind(this);
//         this.onChangePrice = this.onChangePrice.bind(this);
//         this.onChangeImage = this.onChangeImage.bind(this);
//         this.onChangeBrand = this.onChangeBrand.bind(this);
//         this.onChangeCategory = this.onChangeCategory.bind(this);
//         this.onChangeCountInStock = this.onChangeCountInStock.bind(this);
//         this.onChangeDescription = this.onChangeDescription.bind(this);

//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             add_name: '',
//             add_price: '',
//             add_image: '',
//             add_brand: '',
//             add_category: '',
//             add_countInStock: '',
//             add_description: '',
//             // re_username: '',
//             // re_password: '',
//             // re_password_confirmation: ''
//         }
//     }

//     onChangeName(e) {
//         this.setState({
//             name: e.target.value
//         });
//     }

//     onChangePrice(e) {
//         this.setState({
//             prices: e.target.value
//         });
//     }

//     onChangeImage(e) {
//         this.setState({
//             image: e.target.value
//         }); 
//     }

//     onChangeBrand(e) {
//         this.setState({
//             brand: e.target.value
//         }); 
//     }

//     onChangeCategory(e) {
//         this.setState({
//             category: e.target.value
//         }); 
//     }

//     onChangeCountInStock(e) {
//         this.setState({
//             countInStock: e.target.value
//         }); 
//     }

//     onChangeDescription(e) {
//         this.setState({
//             description: e.target.value
//         }); 
//     }

//     onSubmit(e) {
//         e.preventDefault();
        
//         const product = { 
//             name: e.target.add_name.value,
//             price: e.target.add_price.value,
//             image: e.target.add_image.value,
//             brand: e.target.add_brand.value,
//             category: e.target.add_category.value,
//             countInStock: e.target.add_countInStock.value,
//             description: e.target.add_description.value,

//             // username: e.target.re_username.value,
//             // password: e.target.re_password.value,
//             // password_confirmation: e.target.re_password_confirmation.value,
//         }

//         // console.log(user);

//         Axios.post('http://localhost:5000/products/add', product)
//         .then((res) => {
//             document.getElementById("Message").innerHTML = res.data.message;  
//         })
                
//         this.setState({
//             name: '',
//             price: '',
//             image: '',
//             brand: '',
//             category: '',
//             countInStock: '',
//             description: '',
//             // username: '',
//             // password: '',
//             // password_confirmation: ''
//         })
//         window.location = '/shopping';
//     }

//     render() {
//         return (
//             <div>
//                 {/* <h3>Create New User</h3> */}
//                 <form onSubmit={this.onSubmit}>
//                     <ul className="form-container">
//                         <li>
//                             <h3>Create New Product</h3>
//                         </li>
                        
//                         <li>
//                             <label className="label-title" htmlFor="name">Nmae</label>
//                             <input type="text" name="name" id="name" onChange={this.onChangeName} />
//                         </li>
//                         <li>
//                             <label className="label-title" htmlFor="price">Price</label>
//                             <input type="text" name="price" id="price" onChange={this.onChangePrice} />
//                         </li>
//                         <li>
//                             <label className="label-title" htmlFor="image">Image</label>
//                             <input type="text" name="image" id="image" onChange={this.onChangeImage} />
//                         </li>
//                         <li>
//                             <label className="label-title" htmlFor="brand">Brand</label>
//                             <input type="text" name="brand" id="brand" onChange={this.onChangeBrand} />
//                         </li>
//                         <li>
//                             <label className="label-title" htmlFor="category">Category</label>
//                             <input type="text" name="category" id="category" onChange={this.onChangeCategory} />
//                         </li>
//                         <li>
//                             <label className="label-title" htmlFor="countInStock">Count In Stock</label>
//                             <input type="text" name="countInStock" id="countInStock" onChange={this.onChangeCountInStock} />
//                         </li>
//                         <li>
//                             <label className="label-title" htmlFor="description">Description</label>
//                             <textarea name="description" id="description" onChange={this.onChangeDescription} />
//                         </li>
//                         <li>
//                             <button type="submit" className="button btn-bg">Create</button>
//                         </li>
//                     </ul>
//                 </form>

                {/* <Form onSubmit={this.onSubmit}>
                    <FormGroup className="form-group">
                        <Label>Username</Label>
                        <Input type="text" name="re_username" onChange={this.onChangeUsername}/>
                    </FormGroup>

                    <FormGroup className="form-group">
                        <Label>Password</Label>
                        <Input type="password" name="re_password" onChange={this.onChangePassword}/>
                    </FormGroup>
                    
                    <FormGroup className="form-group">
                        <Label>Confirm Password</Label>
                        <Input type="password" name="re_password_confirmation" onChange={this.onChangePasswordConfirmation}/>
                    </FormGroup>

                    <h2 align="center" id="Message"></h2>
                    <Button type="submit" className="btn btn-primary" >Register</Button>

                </Form> */}
//             </div>
//         );
//     }
// }