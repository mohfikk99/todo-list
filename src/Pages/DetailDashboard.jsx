import { Card } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddListItem from '../Components/AddListItem'
import EditActivity from '../Components/EditActivity'
import EditListItem from '../Components/EditListItem'
import { DeleteOutlined } from '@ant-design/icons'

export default function DetailDashboard() {
  const [data, setData] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const fetchDataActivity = async () => {
      await axios
        .get(`https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${id}`)
        .then((res) => {
          setData(res?.data?.data);
        })
    };
    fetchDataActivity();
  }, [id]);

  const Delete = async (ids) => {
    await axios
    .delete(`https://todo.api.devcode.gethired.id/todo-items?id=${ids}`)
  }

  return (
    <>
        <div className='section mt-5'>
            <EditActivity id={id}/>
            <AddListItem id={id}/>
        </div>

        {data.length !== 0 ? (
          data.map((item) => (
            <Card key={item.id} className="text-center mt-5">
              <div className='row'>
                <div className='col'>
                  <EditListItem id={item.id}/>
                </div>
                <div className='col'>
                  <DeleteOutlined onClick={() => Delete(item.id)} />
                </div>
              </div>
            </Card>
            ))
        ) : (
          <div className='text-center mt-5'>
            <img src="/todo-empty-state.svg" alt="todo-empty-state.svg"/>
          </div>
        )}

        

    </>
  )
}
