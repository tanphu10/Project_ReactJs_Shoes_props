import React, { Component } from "react";
import "./style.css";
export default class ProductShoes extends Component {
  render() {
    let { item } = this.props;
    console.log(this.props);
    return (
      <div className="product_item p-2">
        <img src={item.image} alt="" className="w-100" />
        <h3 className="">{item.name}</h3>
        <h4 className="">Price: {item.price}$</h4>
        {/* <p>{item.description}</p> */}
        <button
          className="btn btn-outline-warning"
          data-toggle="modal"
          data-target="#myModal"
          onClick={() => {
            this.props.chiTietSanPham(item);
          }}
        >
          Xem chi tiết
        </button>

       
      </div>
    );
  }
}
