import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserDetails from "./pages/UserDetails";
import UserGoals from "./pages/UserGoals";
import AdminEmails from "./pages/AdminEmails";

enum OnboardingStatus {
  started = "onboarding_started",
  userdetails = "user_details_collected",
  usergoals = "user_goals_collected",
  adminemails = "admin_emails_provided",
}

interface State {
  onboardingStatus: string;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      onboardingStatus: "",
    };
  }

  next = (): void => {
    const { onboardingStatus } = this.state;
    switch (onboardingStatus) {
      case OnboardingStatus.started:
        this.setState({
          onboardingStatus: OnboardingStatus.userdetails,
        });
        break;
      case OnboardingStatus.userdetails:
        this.setState({
          onboardingStatus: OnboardingStatus.usergoals,
        });
        break;
      case OnboardingStatus.usergoals:
        this.setState({
          onboardingStatus: OnboardingStatus.adminemails,
        });
        break;
    }
  };

  prev = (): void => {
    const { onboardingStatus } = this.state;
    switch (onboardingStatus) {
      case OnboardingStatus.started:
        this.setState({
          onboardingStatus: OnboardingStatus.started,
        });
        break;
      case OnboardingStatus.userdetails:
        this.setState({
          onboardingStatus: OnboardingStatus.started,
        });
        break;
      case OnboardingStatus.usergoals:
        this.setState({
          onboardingStatus: OnboardingStatus.userdetails,
        });
        break;
      case OnboardingStatus.adminemails:
        this.setState({
          onboardingStatus: OnboardingStatus.usergoals,
        });
        break;
    }
  };

  generateView = (): JSX.Element => {
    const { onboardingStatus } = this.state;
    switch (onboardingStatus) {
      case OnboardingStatus.started:
        return <UserDetails next={this.next} prev={this.prev} />;
      case OnboardingStatus.userdetails:
        return <UserGoals next={this.next} prev={this.prev} />;
      case OnboardingStatus.usergoals:
        return <AdminEmails next={this.next} prev={this.prev} />;
      default:
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        );
    }
  };

  componentDidMount = (): void => {
    this.setState({
      onboardingStatus: OnboardingStatus.started,
    });
  };

  render(): JSX.Element {
    return <div>{this.generateView()}</div>;
  }
}

export default App;
