import React from "react";
import { Form, Card, Input } from "semantic-ui-react";

interface Props {
  next: () => void;
  prev: () => void;
}

class UserGoals extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <Card centered>
        <Card.Header as={"h1"} textAlign={"center"}>
          Hi Brian.
        </Card.Header>
        <Card.Meta>What are your main goals with Slayte?</Card.Meta>
        <Card.Description>
          <Form>
            <Form.Field inline>
              <label>1</label>
              <Input placeholder="First Goal" />
            </Form.Field>
            <Form.Field inline>
              <label>2</label>
              <Input placeholder="Second Goal" />
            </Form.Field>
            <Form.Field inline>
              <label>3</label>
              <Input placeholder="Third Goal" />
            </Form.Field>
          </Form>
          <Form.Group>
            <Form.Button onClick={this.props.prev}>Back</Form.Button>
            <Form.Button onClick={this.props.next}>Proceed</Form.Button>
          </Form.Group>
        </Card.Description>
      </Card>
    );
  }
}

export default UserGoals;
