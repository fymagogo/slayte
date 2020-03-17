import React from "react";
import { Form, Card, Grid } from "semantic-ui-react";

interface Props {
  next: () => void;
  prev: () => void;
}

class UserDetails extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <Grid centered columns={2}>
        <Form>
          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column></Grid.Column>
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
          </Grid.Row>
          <Form.Group widths="equal"></Form.Group>
          <Form.Input label="Email" placeholder="Email" width={16} />
        </Form>

        <Form.Button onClick={this.props.next}>Proceed</Form.Button>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
      </Grid>
    );
  }
}

export default UserDetails;
