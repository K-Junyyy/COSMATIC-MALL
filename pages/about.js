import React from "react";
import { Header, Divider, List, Form, Button } from "semantic-ui-react";

export default function about() {
  return (
    <div>
      <Header as="h3" style={{ paddingTop: 40 }} color="black">
        회사소개
      </Header>
      <Divider></Divider>
      <List>
        <List.Item>
          <List.Icon name="users"></List.Icon>
          <List.Content>Semantic UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker"></List.Icon>
          <List.Content>Semantic UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail"></List.Icon>
          <List.Content>
            <a href="cocoon1787@gmail.com">cocoon1787@gmail.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify"></List.Icon>
          <List.Content>
            <a href="https://cocoon1787.tistory.com/">
              https://cocoon1787.tistory.com/
            </a>
          </List.Content>
        </List.Item>
      </List>
      <Header as="h3" style={{ paddingTop: 40 }} color="black">
        문의사항
      </Header>
      <Divider></Divider>
      <Form>
        <Form.Field>
          <label>제목</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>내용</label>
          <textarea />
        </Form.Field>
        <Button color="black">보내기</Button>
      </Form>
    </div>
  );
}
