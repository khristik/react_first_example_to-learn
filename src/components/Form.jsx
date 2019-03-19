import React, { Component } from 'react';

import Input from '../components/Input';
import Button from '../components/Button';

function Form({ submitHandler }) {
    return (
       <form className="">
          <Input type="text" name="firstname" placeholder="name" />
          <Input type="text" name="lasttname" placeholder="test" />
          <Input type="email" name="email" placeholder="test" />
          <Input type="password" name="password" placeholder="test" />
          <Button submit={submitHandler}/>
       </form>
    );
}

export default Form;