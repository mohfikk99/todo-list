import React from 'react'
import { Button, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import axios from 'axios';

export default function AddActivity() {

    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
        type: "success",
        content: "Add Campaign successfully!",
        });
    };

    const Submit = () => {
        const data = {
            title: "Activity"
          };
          axios.post("https://todo.api.devcode.gethired.id/activity-groups", data)
            .then((res) => {
              console.log(res);
              success();
            })
            .catch((err) => console.log(err));
    }

  return (
    <>
        <Button onClick={Submit} type="primary" shape="round" icon={<PlusOutlined />} size='large'>
            Tambah
        </Button>
        {contextHolder}
    </>
  )
}
