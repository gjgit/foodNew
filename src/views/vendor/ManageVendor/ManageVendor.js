import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

// import Widget03 from '../../views/Widgets/Widget03'
//const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));
const Loading = () => <div>Loading...</div>;

// Main Chart

class ManageVendor extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                ManageVendor
                  <button className="float-right mb-0 "
                      type="button"
                      onClick={() => {
                        this.props.history.push('/editmanagevendor');
                      }}
                    >
                      Click Me!
                    </button>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="12" xl="12">
                    <Row>
                      <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                        <thead className="thead-light">
                          <tr>
                            <th className="text-center">
                              <i className="icon-people" />
                            </th>
                            <th>Name</th>
                            <th className="text-center">Email</th>
                            <th>Status</th>
                            <th className="text-center">Account Balance</th>
                            <th className="text-center">Sort Order</th>
                            <th className="text-center">Top Restaurant</th>
                            <th className="text-center">Created Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">
                              <div className="avatar">
                                <img
                                  src={'assets/img/avatars/1.jpg'}
                                  className="img-avatar"
                                  alt="admin@bootstrapmaster.com"
                                />
                                <span className="avatar-status badge-success" />
                              </div>
                            </td>
                            <td>
                              <div>Yiorgos Avraamu</div>
                              <div className="small text-muted">
                                <span>New</span> | Registered: Jan 1, 2015
                              </div>
                            </td>
                            <td className="text-center">
                              <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us" />
                            </td>
                            <td>
                              <div className="clearfix">
                                <div className="float-left">
                                  <strong>50%</strong>
                                </div>
                                <div className="float-right">
                                  <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                </div>
                              </div>
                              <Progress className="progress-xs" color="success" value="50" />
                            </td>
                            <td className="text-center">
                              <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }} />
                            </td>
                            <td>
                              <div className="small text-muted">Last login</div>
                              <strong>10 sec ago</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <div className="avatar">
                                <img
                                  src={'assets/img/avatars/2.jpg'}
                                  className="img-avatar"
                                  alt="admin@bootstrapmaster.com"
                                />
                                <span className="avatar-status badge-danger" />
                              </div>
                            </td>
                            <td>
                              <div>Avram Tarasios</div>
                              <div className="small text-muted">
                                <span>Recurring</span> | Registered: Jan 1, 2015
                              </div>
                            </td>
                            <td className="text-center">
                              <i className="flag-icon flag-icon-br h4 mb-0" title="br" id="br" />
                            </td>
                            <td>
                              <div className="clearfix">
                                <div className="float-left">
                                  <strong>10%</strong>
                                </div>
                                <div className="float-right">
                                  <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                </div>
                              </div>
                              <Progress className="progress-xs" color="info" value="10" />
                            </td>
                            <td className="text-center">
                              <i className="fa fa-cc-visa" style={{ fontSize: 24 + 'px' }} />
                            </td>
                            <td>
                              <div className="small text-muted">Last login</div>
                              <strong>5 minutes ago</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <div className="avatar">
                                <img
                                  src={'assets/img/avatars/3.jpg'}
                                  className="img-avatar"
                                  alt="admin@bootstrapmaster.com"
                                />
                                <span className="avatar-status badge-warning" />
                              </div>
                            </td>
                            <td>
                              <div>Quintin Ed</div>
                              <div className="small text-muted">
                                <span>New</span> | Registered: Jan 1, 2015
                              </div>
                            </td>
                            <td className="text-center">
                              <i className="flag-icon flag-icon-in h4 mb-0" title="in" id="in" />
                            </td>
                            <td>
                              <div className="clearfix">
                                <div className="float-left">
                                  <strong>74%</strong>
                                </div>
                                <div className="float-right">
                                  <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                </div>
                              </div>
                              <Progress className="progress-xs" color="warning" value="74" />
                            </td>
                            <td className="text-center">
                              <i className="fa fa-cc-stripe" style={{ fontSize: 24 + 'px' }} />
                            </td>
                            <td>
                              <div className="small text-muted">Last login</div>
                              <strong>1 hour ago</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <div className="avatar">
                                <img
                                  src={'assets/img/avatars/4.jpg'}
                                  className="img-avatar"
                                  alt="admin@bootstrapmaster.com"
                                />
                                <span className="avatar-status badge-secondary" />
                              </div>
                            </td>
                            <td>
                              <div>Enéas Kwadwo</div>
                              <div className="small text-muted">
                                <span>New</span> | Registered: Jan 1, 2015
                              </div>
                            </td>
                            <td className="text-center">
                              <i className="flag-icon flag-icon-fr h4 mb-0" title="fr" id="fr" />
                            </td>
                            <td>
                              <div className="clearfix">
                                <div className="float-left">
                                  <strong>98%</strong>
                                </div>
                                <div className="float-right">
                                  <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                </div>
                              </div>
                              <Progress className="progress-xs" color="danger" value="98" />
                            </td>
                            <td className="text-center">
                              <i className="fa fa-paypal" style={{ fontSize: 24 + 'px' }} />
                            </td>
                            <td>
                              <div className="small text-muted">Last login</div>
                              <strong>Last month</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <div className="avatar">
                                <img
                                  src={'assets/img/avatars/5.jpg'}
                                  className="img-avatar"
                                  alt="admin@bootstrapmaster.com"
                                />
                                <span className="avatar-status badge-success" />
                              </div>
                            </td>
                            <td>
                              <div>Agapetus Tadeáš</div>
                              <div className="small text-muted">
                                <span>New</span> | Registered: Jan 1, 2015
                              </div>
                            </td>
                            <td className="text-center">
                              <i className="flag-icon flag-icon-es h4 mb-0" title="es" id="es" />
                            </td>
                            <td>
                              <div className="clearfix">
                                <div className="float-left">
                                  <strong>22%</strong>
                                </div>
                                <div className="float-right">
                                  <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                </div>
                              </div>
                              <Progress className="progress-xs" color="info" value="22" />
                            </td>
                            <td className="text-center">
                              <i className="fa fa-google-wallet" style={{ fontSize: 24 + 'px' }} />
                            </td>
                            <td>
                              <div className="small text-muted">Last login</div>
                              <strong>Last week</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <div className="avatar">
                                <img
                                  src={'assets/img/avatars/6.jpg'}
                                  className="img-avatar"
                                  alt="admin@bootstrapmaster.com"
                                />
                                <span className="avatar-status badge-danger" />
                              </div>
                            </td>
                            <td>
                              <div>Friderik Dávid</div>
                              <div className="small text-muted">
                                <span>New</span> | Registered: Jan 1, 2015
                              </div>
                            </td>
                            <td className="text-center">
                              <i className="flag-icon flag-icon-pl h4 mb-0" title="pl" id="pl" />
                            </td>
                            <td>
                              <div className="clearfix">
                                <div className="float-left">
                                  <strong>43%</strong>
                                </div>
                                <div className="float-right">
                                  <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                </div>
                              </div>
                              <Progress className="progress-xs" color="success" value="43" />
                            </td>
                            <td className="text-center">
                              <i className="fa fa-cc-amex" style={{ fontSize: 24 + 'px' }} />
                            </td>
                            <td>
                              <div className="small text-muted">Last login</div>
                              <strong>Yesterday</strong>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Row>
                    <hr className="mt-0" />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ManageVendor;
