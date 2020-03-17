import React from "react";
import { Form, Card, Input, Icon } from "semantic-ui-react";

interface Props {
  next: () => void;
  prev: () => void;
}

class AdminEmails extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <Card centered>
        <Card.Header as={"h1"} textAlign={"center"}>
          Way to go!.
        </Card.Header>
        <Card.Meta>
          Let us know who should be admins in your setup, and then you're on
          your way!
        </Card.Meta>
        <Card.Description>
          <Form>
            <Form.Field inline>
              <Input placeholder="Type email" />
            </Form.Field>
            <Icon name="exclamation circle" />
          </Form>
          <Form.Group>
            <Form.Button onClick={this.props.prev}>Back</Form.Button>
            <Form.Button onClick={this.props.next}>Finish</Form.Button>
          </Form.Group>
        </Card.Description>
      </Card>
    );
  }
}

export default AdminEmails;
