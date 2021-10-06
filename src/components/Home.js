import React, { Component } from "react";
import $ from 'jquery';
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      fromDate: "",
      toDate: "",
      list: [],
    };
  }
  handleClick = () => {
    fetch("https://apibestdrop.ajatus.in/purchaseOrderApi/getAll", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FromDate: this.state.fromDate,
        ToDate: this.state.toDate,
        OilId: 0,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
            list:result
        })
      })
      .catch((error) => {
        console.error(error);
      });

   

  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Home component</h1>
        <label>From date</label>
        <input
          type="text"
          onChange={(e) => {
            this.setState({
              fromDate: e.target.value,
            });
          }}
        ></input>
        <label>To Date</label>
        <input
          type="text"
          onChange={(e) => {
            this.setState({
              toDate: e.target.value,
            });
          }}
        ></input>
        <button onClick={this.handleClick}>Search</button>

              <table id="myTable" className="table table-striped">
                <thead>
                  <tr>
                    <th>BrokerId</th>
                    <th>BrokerName</th>
                    <th>CanCancel </th>
                    <th>Insurance</th>
                    <th>IsCanceled</th>
                    <th>IsFulfillmentDateCompleted</th>
                    <th>OilId </th>
                    <th>OilLtPerKgId</th>
                    <th>OilName </th>
                    <th>POAfterSaleQty</th>
                    <th>PODate</th>
                    <th>POFulfillmentDate</th>
                    <th>PONumber</th>
                    <th>PORemainingAmount </th>
                    <th>POStatus</th>
                    <th>POTotalAmt</th>
                    <th>PackagingType </th>
                    <th>Price</th>
                    <th>PurchaseOrderMasterId </th>
                    <th>Quantity </th>
                    <th>QuantityToBeReceived </th>
                    <th>Transportation</th>
                    <th>Unit</th>
                    <th>VenderId </th>
                    <th>vendorName </th>
                    
                  </tr>
                </thead>
                <tbody>
                    {this.state.list.map((m,i)=>{
                        return(
                            <>           
                  <tr>
                  <th>BrokerId</th>
                    <td>{m.BrokerName}</td>
                    <td>{m.CanCancel} </td>
                    <td>{m.Insurance}</td>
                    <td>{m.IsCanceled}</td>
                    <td>{m.IsFulfillmentDateCompleted}</td>
                    <td>{m.OilId} </td>
                    <td>{m.OilLtPerKgId}</td>
                    <td>{m.OilName} </td>
                    <td>{m.POAfterSaleQty}</td>
                    <td>{m.PODate}</td>
                    <td>{m.POFulfillmentDate}</td>
                    <td>{m.PONumber}</td>
                    <td>{m.PORemainingAmount} </td>
                    <td>{m.POStatus}</td>
                    <td>{m.POTotalAmt}</td>
                    <td>{m.PackagingType} </td>
                    <td>{m.Price}</td>
                    <td>{m.PurchaseOrderMasterId} </td>
                    <td>{m.Quantity} </td>
                    <td>{m.QuantityToBeReceived} </td>
                    <td>{m.Transportation}</td>
                    <td>{m.Unit}</td>
                    <td>{m.VenderId} </td>
                    <td>{m.vendorName} </td>
                  </tr>
                  </>
                        )
                    })}
                </tbody>
              </table>
            {/* {
                   $(document).ready(function(){
                    $('#myTable').dataTable();
                })
            }   */}
              
      </div>
    );
  }
}
