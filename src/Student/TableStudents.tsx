import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './TableStudents.css'



export default function TableStudents(){
    const { Search } = Input;

    interface Student{
        key:string,
        name: string,
        email: string,
        password: string,
        code: number,
        classification?: string
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
            // console.log("_:",_)
            // console.log("record:",record)

            return (
                <div>{record.classification}</div>
            )
        }
    },
    ];
    const infData: Student[] = [
        {
            key:'1',
            name:'Xuan Huy',
            email:'XuanHuy@gmail.com',
            password:'xinchao',
            code:7,
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
        },
    ];
    const defaultData : Student[]= infData.map((student:Student)=>{
        const cd: number=student.code
        let type: string=''
        if(cd<5){
            type='Bad'
        }
        else if(cd>= 5 && cd <6.5){
            type='Average'
        }
        else if(cd>= 6.5 && cd <8){
            type='Good'
        }
        else if(cd>= 8.5 && cd < 9){
            type='Very Good'
        }
        else{
            type='Excellent'
        }
        return {
            key: student.key,
            name:student.name,
            email:student.email,
            password: student.password,
            code:student.code,
            classification:type
        }
    })

    // const defaultData: Student[] = [
    //     {
    //         key:'1',
    //         name:'Xuan Huy',
    //         email:'XuanHuy@gmail.com',
    //         password:'xinchao',
    //         code:7,
    //         classification:"Good"
    //     },
    //     {
    //         key:'2',
    //         name:'Quynh Anh',
    //         email:'QuynhAnh@gmail.com',
    //         password:'xinchao',
    //         code:5,
    //         classification:"Average"
    //     },
    //     {
    //         key:'3',
    //         name:'Tao Thao',
    //         email:'TaoThao@gmail.com',
    //         password:'xinchao',
    //         code:9.5,
    //         classification:"Very Good"
    //     },
    // ];
    const [point,setPoint] =useState(0)
    useEffect(()=>{
        setData(defaultData)
    },[])
    const [data,setData] =useState<Student[]>([{
        key:'1',
        name:'No name',
        email:'xxxx@gmail.com',
        password:'*******',
        code:5,
        classification:"Average"
    }])
    const searchCode=(e:any):void=>{
        const valueInput: any = + e.target.value 
        console.log("typeof valueInput:",typeof valueInput)
        console.log("valueInput:",valueInput)
        //giá trị nhập ko thỏa mãn -> block ko chạy -> valueInput ko nhận được giá trị mới: 
        //mà nó đang bị two-way-biding (ràng buộc 2 chiều) -> ko nhập được giá trị mới trên input
        if(!isNaN(valueInput)){
            setPoint(e.target.value)
            let newData:Student[]
            newData=defaultData.filter((dt:Student)=>{
                console.log("typeof dt.code:",typeof dt.code)
    
                return dt.code > e.target.value
            })
            setData(newData)
            console.log('newData=',newData)
        }
    }
    return(
        <div id='form_container'>
            <div className='title'>
                Lọc các sinh viên có điểm lớn hơn hoặc bằng
                <Search placeholder="input search text" enterButton="Search" size="large" value={point} loading={false} onChange={(e)=>searchCode(e)}/>
                </div>

                <Table columns={columns} dataSource={data} />

        </div>

    )
}