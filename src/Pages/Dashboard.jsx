import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AddActivity from '../Components/AddActivity'
import { DeleteOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [data, setData] = useState([])

  const navigate = useNavigate()

  const fetchDataActivity = async () => {
    await axios
      .get("https://todo.api.devcode.gethired.id/activity-groups")
      .then((res) => {
        setData(res?.data?.data);
      })
  };

  useEffect(() => {
    fetchDataActivity();
  }, []);

  const Delete = async (ids) => {
    await axios
    .delete(`https://todo.api.devcode.gethired.id/activity-groups?id=${ids}`)
    fetchDataActivity()
  }

  return (
    <>
      <div className='section mt-5'>
        <h1><strong>Activity</strong></h1>
        <AddActivity/>
      </div>

      <div className='row'>

      {data.map((item) => (
        <div key={item.id} className='col-sm-3 mt-5'>
          <div className="card h-card">
            <div className="card-body" onClick={() => navigate(`/detail/${item.id}`)}>
              <h4 className="card-title"><strong>{item.title}</strong></h4>
            </div>
            <div className="card-footer bg-transparent border-light section">
              <small className="text-muted">{item.created_at}</small>
              <DeleteOutlined onClick={() => Delete(item.id)} />
            </div>
          </div>
        </div>
      ))}

        
        
      </div>
    </>
  )
}
