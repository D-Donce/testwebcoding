import React, { useCallback, useState } from 'react';
import { Form, Error, Label, Input, LinkContainer, Button, Header } from './styles';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordcheck] = useState('');
  const [mismatchError, setMismatchError] = useState(false);
  const onChangeEmail = useCallback((e:any) => {
    setEmail(e.target.value);
  }, []);

  const onChangeNickname = useCallback((e:any) => {
    setNickname(e.target.value);
  }, []);

  const onChangePassword = useCallback(
    (e:any) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e:any) => {
      setPasswordcheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e:any) => {
      e.preventDefault();
      if (!mismatchError && nickname) {
        console.log('서버로 회원가입하기');
        axios
          .post('http://localhost:3095/api/users', {
            email,
            nickname,
            password,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.response);
          })
          .finally(() => {});
      }
    },
    [email, nickname, password, passwordCheck, mismatchError],
  );
  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {/* {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>} */}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        {/* <Link to="/login">로그인 하러가기</Link> */}
      </LinkContainer>
    </div>
  );
};

export default SignUp;