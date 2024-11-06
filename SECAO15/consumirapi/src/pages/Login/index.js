import React from 'react';

import { Container } from '../../styles/GlobalStyles';

import {toast} from 'react-toastify';
import {isEmail} from 'validator';
import {useDispatch, useSelector} from 'react-redux';
import {get} from 'lodash';
import {Form} from './styled';
import * as actions from '../../store/modules/auth/actions'

import Loading from '../../components/Loading';

export default function Login() {
  const dispatch = useDispatch();
  const prevPath = get(props, 'location.state.prevPath','/');
  const isLoading = useSelector(state => state.auth.isLoading);
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    let formErrors = false;

    if (password.length< 6 || password.length> 50){
      formErrors = true;
      toast.error('Senha invalida.')
    }
    if(!isEmail(email)){
      formErrors=true;
      toast.error('email invalido.')
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({email,password,prevPath}));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
      <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder='seu e-mail' />
      <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='sua senha.' />
      <button type='submit'>Acessar</button>
    </Form>
    </Container>

  );
}