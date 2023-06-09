import React, { useEffect, useState } from 'react'
import { Form, Input } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import axios from 'axios';

export default function EditListItem({id}) {
  const [title, setTitle] = useState()
  const [data, setData] = useState({
    title: ''
  })
  const [update, setUpdate] = useState(false)

    const Submit = (ids) => {
          axios.patch(`https://todo.api.devcode.gethired.id/todo-items?id=${ids}`, data)
          setUpdate(false)
    }

    
    
    useEffect(() => {
      const fetchDataActivity = async () => {
        await axios
          .get(`https://todo.api.devcode.gethired.id/todo-items?id=${id}`)
          .then((res) => {
            setTitle(res?.data?.data[0]?.title)
        })
      };
      fetchDataActivity();
    }, [id]);

  return (
    <>
        {update ? (
          <Form className="login-form">
          <Form.Item
            name="title"
            rules={[{ required: true, message: "title is required!" }]}
          >
            <Input
              defaultValue={title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              className="input-form"
              size="large"
            />
          </Form.Item>
          <EditOutlined onClick={() => Submit(id)} />
          </Form>
        ) : (
          <div className='row' >
            <div className='col'>
              <h3 className='mr-5'>{title}</h3>
            </div>
            <div className='col'>
             <EditOutlined onClick={() => setUpdate(true)} />
            </div>
          </div>
        )}
      
    </>
  )
}
