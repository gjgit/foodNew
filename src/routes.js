import React from 'react';
import Loadable from 'react-loadable';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
	return <div>Loading...</div>;
}
// for Dashboard
const Dashboard = Loadable({
	loader: () => import('./views/Dashboard'),
	loading: Loading,
});
// for manage vendor
const ManageVendor = Loadable({
	loader: () => import('./views/vendor/ManageVendor'),
	loading: Loading,
});
// for manage vendor outlet
const  ManageVendorOutlet = Loadable({
	loader: () => import('./views/vendor/ManageVendorOutlet'),
	loading: Loading,
});
// for manage vendor item
const ManageVendorItem = Loadable({
	loader: () => import('./views/vendor/ManageVendorItem'),
	loading: Loading,
});
// for manage vendor payment
const ManageVendorPayment = Loadable({
	loader: () => import('./views/vendor/ManageVendorPayment'),
	loading: Loading,
});
// for manage vendor review
const ManageVendorReview = Loadable({
	loader: () => import('./views/vendor/ManageVendorReview'),
	loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
	{ path: '/', exact: true, name: 'Home', component: DefaultLayout },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard },
	{ path: '/managevendor', name: 'ManageVendor', component: ManageVendor },
	{ path: '/manageoutlets', name: 'Manage Vendor Outlet', component: ManageVendorOutlet },
	{ path: '/managevendoritem', name: 'Manage Vendor Item', component: ManageVendorItem },
	{ path: '/managevendorpayment', name: 'Manage Vendor Payment', component: ManageVendorPayment },
	{ path: '/managereviews', name: 'Manage Vendor Review', component: ManageVendorReview },
];

export default routes;
