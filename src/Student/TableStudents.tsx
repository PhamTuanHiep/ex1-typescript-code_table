import React from 'react';
import { Space, Table, Tag, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Search } = Input;

interface Student{
    key:string,
    name: string,
    email: string,
    password: string,
    code: number,
    classification: string
}

const columns: ColumnsType<Student> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Classification',
    key: 'classification',
    render: (_, record) => {
        console.log("_:",_)
        console.log("record:",record)

        return (
            <div>{record.classification}</div>
        )
    }
  },
];

const data: Student[] = [
    {
        
        key:'1',
        name:'Xuan Huy',
        email:'XuanHuy@gmail.com',
        password:'xinchao',
        code:7,
        classification:"Pretty"
    },
    {
        
        key:'2',
        name:'Quynh Anh',
        email:'QuynhAnh@gmail.com',
        password:'xinchao',
        code:5,
        classification:"Average"
    },
    {
        
        key:'3',
        name:'Tao Thao',
        email:'TaoThao@gmail.com',
        password:'xinchao',
        code:9.5,
        classification:"Good"
    },
];



export default function TableStudents(){
    return(
        <div>
            <div>
                Lọc các sinh viên có điểm lớn hơn hoặc bằng
                <Search placeholder="input search text" enterButton="Search" size="large" loading={false} />
                </div>

            <Table columns={columns} dataSource={data} />

        </div>

    )
}