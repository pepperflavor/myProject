import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NewJoin=(props)=> {
 const [joinId, setJoinId] = useState();
 const [joinPwd, setJoinPwd] = useState();
 const [joinEmail, setJoinEmail] = useState();

const joinIdChangehandler =(event)=>{
  setJoinId(event.target.value)
  console.log(joinId);
}

const joinPwdChangehandler = (event) =>{
  setJoinPwd(event.target.value)
  console.log(joinPwd);
}
const joinEmailChangehandler = (event) => {
  setJoinEmail(event.target.value);
  console.log(joinEmail);
};

  const showChangehandler = (v) => {
    if (v === false) {
      props.setShowJoin(true);
    } else if (v === true) {
      props.setShowJoin(false);
    }
  };

  const joinData = {
    userId: joinId,
    pwd: joinPwd,
  };

  const joinSubmithadler = () =>{
    // db로 전송해주기
    

  }


    return (
      <>
        <h5>If you don't have ID</h5>
        <button
          type=""
          onClick={() => {
            showChangehandler(props.showJoin);
          }}
        >
          Join Us!!
        </button>

        {props.showJoin ? (
          <div id="join-container--top">
            <br />
            <Form onSubmit={joinSubmithadler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nickname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Nickname"
                  onChange={joinIdChangehandler}
                />
                <Form.Text className="text-muted">
                  We'll never share your personal information with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="E-mail"
                  onChange={joinEmailChangehandler}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={joinPwdChangehandler}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Please agree to the use of personal information (Check me out)"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                카톡으로 가입하기
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        ) : (
          " "
        )}
      </>
    );
}

export default NewJoin;
