import { Button, Form, Input, Modal, Select } from 'antd'
import axios from 'axios';
import React, { useState } from 'react'

export default function AddListItem({id}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState({
        title: "",
        activity_group_id: id,
        is_active: 1,
        priority: ""
  })
  const showModal = () => {setIsModalOpen(true)};
  const handleOk = () => {
    axios.post(`https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${id}`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
    setIsModalOpen(false);
  };

  return (
    <>
        <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Tambah List Item" open={isModalOpen} onOk={handleOk}>
        <Form className="login-form">
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Title is required!" }]}
          >
            <Input onChange={(e) => setData({ ...data, title: e.target.value })}  size="large" placeholder="Title" />
          </Form.Item>

          <Select
                labelInValue
                style={{width: 120}}
                onChange={(e) => setData({ ...data, priority: e.value })}
                placeholder="Pilih Priority"
                options={[
                {
                    value: 'Very High',
                    label: 'Vary High',
                },
                {
                    value: 'High',
                    label: 'High',
                },
                {
                    value: 'Medium',
                    label: 'Medium',
                },
                {
                    value: 'Low',
                    label: 'Low',
                },
                {
                    value: 'Very Low',
                    label: 'Very Low',
                },
                ]}
            />
        </Form>
      </Modal>
    </>
  )
}
