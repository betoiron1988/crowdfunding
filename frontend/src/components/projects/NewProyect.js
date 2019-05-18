import React, { Component } from 'react'
import axios from 'axios'
import { Form, Select, Input, Button } from 'antd';


export default class NewProyect extends Component {

    state = {
        name: "",
        description: "",
        constributed_by: ""
    }

    handleOnChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleForSubmit(e) {
        e.prevenDefault()
        axios
            .post('./', this.state)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h2>New Beer</h2>
                <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleForSubmit}>

                    <Form.Item
                        label="Name"
                    >
                        <Input type="text" name="name" onChange={(e) => this.handleOnChange(e)} />
                    </Form.Item>


                    <Form.Item
                        label="Description"
                    >
                        <Input type="text" name="description" onChange={(e) => this.handleOnChange(e)} />
                    </Form.Item>



                    <Form.Item
                        label="Contributed by"
                    >
                        <Input type="text" name="contributed_by" onChange={(e) => this.handleOnChange(e)} />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ span: 12, offset: 5 }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
          </Button>
                    </Form.Item>

                </Form>
            </div>
        )
    }
}