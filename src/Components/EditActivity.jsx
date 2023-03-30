import React, { useEffect, useState } from 'react'
import { Form, Input, message } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import axios from 'axios';

export default function EditActivity({id}) {
  const [title, setTitle] = useState()
  const [data, setData] = useState({
    title: ''
  })
  const [update, setUpdate] = useState(false)

    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
        type: "success",
        content: "Add Campaign successfully!",
        });
    };

    const Submit = () => {
          axios.patch(`https://todo.api.devcode.gethired.id/activity-groups/${id}`, data)
            .then((res) => {
              console.log(res);
              success();
            })
            setUpdate(false)
    }

    
    
    useEffect(() => {
      const fetchDataActivity = async () => {
        await axios
          .get(`https://todo.api.devcode.gethired.id/activity-groups/${id}`)
          .then((res) => {setTitle(res?.data?.title)})
      };
      fetchDataActivity();
    }, [id]);

  return (
    <>
        {update ? (
          <div className='section'>
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
            <EditOutlined onClick={Submit} className="mt-4" style={{ fontSize: '22px'}} />
          </div>
        ) : (
          <div className='section'>
            <h2> <strong>{title}</strong></h2>
            <EditOutlined onClick={() => setUpdate(true)} className="mt-3" style={{ fontSize: '21px'}} />
          </div>
        )}
      
    </>
  )
}
