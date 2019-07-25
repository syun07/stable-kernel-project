import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const LoginPage = (props) => {
    return(
        <div className='login-box-container'>
            <div className="login-box">
                <Form onSubmit={props.handleSubmit}>
                    <Form.Field>
                        <label>E-mail</label>
                        <input name="username" placeholder='E-mail' 
                            onChange={(event) => props.handleChange(event)}/>
                        </Form.Field>
                        <Form.Field>
                        <label>Password</label>
                        <input name="password" placeholder='Password' 
                            onChange={(event) => props.handleChange(event)}/>
                        </Form.Field>
                        <Form.Field>
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                </Form>

            </div>
        </div>
        )
    }

export default LoginPage;