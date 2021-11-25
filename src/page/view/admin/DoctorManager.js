import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import Switch from "@material-ui/core/Switch";

function DoctorManager() {
  return (
    //danh sach 
    <div>
      <br />
      <br />
      <br />
      <div class="panel">
        <div class="panel-heading">
          <h2 style={{ fontWeight: "bold" }}>Danh sách bác sĩ:</h2>
        </div>
        <div id="page-title" className="mar-top">
          <div className="searchbox col-sm-6">
            <div className="input-group custom-search-form">
              <input
                type="text"
                className="form-control"
                style={{ height: "40px", border: "1px solid #B0E0E6" }}
                placeholder="Tìm kiếm bác sĩ。。。。"
                name="keyword"
                onChange
              />
              <span className="input-group-btn">
                <button className="text-muted" type="button">
                  <i className="fa fa-search" />
                </button>
              </span>
            </div>
          </div>
        </div>
        <button
          data-target="#add-author"
          data-toggle="modal"
          className="btn btn-primary btn-labeled fa fa-plus-circle mar-lft mar-top"
        >
          Thên mới bác sĩ{" "}
        </button>

        <div class="panel-body">
          <table
            id="demo-dt-basic"
            class="table table-striped table-bordered"
            cellspacing="0"
            width="100%"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Họ và tên</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Ảnh</th>
                <th>Giới tính</th>
                <th>Chi tiết</th>
                <th>Active</th>
                <th>Phòng khám</th>
                <th className="min-desktop">Action</th>
               
              </tr>
            </thead>
            <tbody>
                <tr >
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <img
                      src
                      style={{
                        display: "block",
                        maxWidth: "150px",
                        maxHeight: "150px",
                        width: "auto",
                        height: "auto",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                  </td>
                  <td>
                  
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div id="combo_button">
                      <button
                        onClick
                        data-target="#update-author"
                        data-toggle="modal"
                        className="btn btn-warning btn-labeled fa fa-pencil mar-rgt"
                        id="button_table"
                      >
                        Update{" "}
                      </button>
                      <button
                        onClick
                        className="btn btn-danger btn-labeled fa fa-trash-o"
                        id="button_table"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* from alert */}

      {/* thêm mới */}
      <div
        className="modal"
        id="add-author"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="demo-default-modal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            {/*Modal header*/}
            <div className="modal-header">
              <button data-dismiss="modal" className="close" type="button">
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title">Thêm mới</h4>
            </div>
            {/*Modal body*/}
            <div className="row mar-all">
              {/* <div className="col-sm-4 text-right mar-lft">

                            <input type="file" id="img" />
                                               </div> */}
              <div className="col-sm-12">
                <form onSubmit>
                  <div className="panel-body ">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="control-label">Họ tên: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Họ tên . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Tuổi: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Tuổi . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Email: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Email . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Địa chỉ: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Địa chỉ . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Số điện thoại: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Số điện thoại . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Ảnh: </label>
                        <input
                          name="title"
                          onChange
                          type="file"
                          placeholder="Ảnh . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Giới tính</label>
                        <select
                          name="type"
                          onChange
                          id="type"
                          className="form-control"
                          onClick
                          required
                        >
                          <option value={false} default>
                            0 - Nam
                          </option>
                          <option value={true}>1 - Nữ </option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="control-label">Chi tiết: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Chi tiết . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Phòng khám: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Phòng khám . . ."
                          className="form-control "
                        />
                      </div>
                      <hr />
                      <button
                        id="closeModal"
                        data-dismiss="modal"
                        onClick
                        type="submit"
                        className="btn btn-success mar-lft"
                      >
                        Thêm
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/*Modal footer*/}
            <div className="modal-footer">
              <button
                data-dismiss="modal"
                className="btn btn-default"
                type="button"
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* sửa  */}
      <div
        className="modal"
        id="update-author"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="demo-default-modal"
        aria-hidden="true"
      >
       <div className="modal-dialog modal-md">
          <div className="modal-content">
            {/*Modal header*/}
            <div className="modal-header">
              <button data-dismiss="modal" className="close" type="button">
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title">Cập nhập</h4>
            </div>
            {/*Modal body*/}
            <div className="row mar-all">
              {/* <div className="col-sm-4 text-right mar-lft">

                            <input type="file" id="img" />
                                               </div> */}
              <div className="col-sm-12">
                <form onSubmit>
                  <div className="panel-body ">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="control-label">Họ tên: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Họ tên . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Tuổi: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Tuổi . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Email: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Email . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Địa chỉ: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Địa chỉ . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Số điện thoại: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Số điện thoại . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Ảnh: </label>
                        <input
                          name="title"
                          onChange
                          type="file"
                          placeholder="Ảnh . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Giới tính</label>
                        <select
                          name="type"
                          onChange
                          id="type"
                          className="form-control"
                          onClick
                          required
                        >
                          <option value={false} default>
                            0 - Nam
                          </option>
                          <option value={true}>1 - Nữ </option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="control-label">Chi tiết: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Chi tiết . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Phòng khám: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Phòng khám . . ."
                          className="form-control "
                        />
                      </div>
                      <hr />
                      <button
                        id="closeModal"
                        data-dismiss="modal"
                        onClick
                        type="submit"
                        className="btn btn-success mar-lft"
                      >
                        Cập nhập
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/*Modal footer*/}
            <div className="modal-footer">
              <button
                data-dismiss="modal"
                className="btn btn-default"
                type="button"
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default DoctorManager;
