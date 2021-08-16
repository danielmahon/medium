import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure as configureEnzyme } from "enzyme";
import "jest-specific-snapshot";

configureEnzyme({ adapter: new Adapter() });
