import React from "react";
import { Modal, Button, ConfigProvider } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
//slices
import { useSelector, useDispatch } from "react-redux";
import {
  RsetUserManagmentEditModal,
  selectUserManagmentEditModal,
  RsetUserManagmentCurrentUser,
  selectUserManagmentCurrentUser,
} from "../../../slices/userManagmentSlices";

const UserManagementEditModal = () => {
  const dispatch = useDispatch();
  const userManagmentEditModal = useSelector(selectUserManagmentEditModal);
  const userManagmentCurrentUser = useSelector(selectUserManagmentCurrentUser);

  const handleModalCancel = () => {
    dispatch(RsetUserManagmentEditModal(false));
  };

  const modalStyles = {
    header: {
      background: "gray",
      padding: "20px",
    },
    body: {
      borderRadius: 5,
      marginTop: "20px",
    },
    mask: {
      backdropFilter: "blur(10px)",
    },
    footer: {
      borderTop: "1px solid gray",
      marginTop: "20px",
      padding: "20px",
    },
    content: {
      boxShadow: "0 0 30px #999",
    },
  };

  return (
    <ConfigProvider direction="rtl" locale={fa_IR}>
      <Modal
        title={`ویرایش کاربر ${userManagmentCurrentUser.userName}`}
        open={userManagmentEditModal}
        styles={modalStyles}
        closable={false}
        onOk={handleModalCancel}
        onCancel={handleModalCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <Button
              style={{ background: "red", color: "white" }}
              onClick={() => handleModalCancel()}
            >
              لفو
            </Button>
            <Button
              style={{ background: "blue", color: "white" }}
              onClick={() => handleModalCancel()}
            >
              ویرایش کاربر
            </Button>
          </>
        )}
      >
        {/* inputs from material ui firstName lastName userName handle the access checkbox*/}
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </ConfigProvider>
  );
};

export default UserManagementEditModal;
