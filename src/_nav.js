export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Vendor Management',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Vendor',
      url: '/vendor',
      icon: 'icon-home',
      children: [
        {
          name: 'Manage Vendor',
          url: '/managevendor',
          icon: 'icon-cursor',
        },
        {
          name: 'Manage Outlets',
          url: '/manageoutlets',
          icon: 'icon-cursor',
        },
        {
          name: 'Manage Vendor Item',
          url: '/managevendoritem',
          icon: 'icon-cursor',
        },
        {
          name: 'Manage Payment',
          url: '/managevendorpayment',
          icon: 'icon-cursor',
        },
        {
          name: 'Manage Reviews',
          url: '/managereviews',
          icon: 'icon-cursor',
        },
      ],
    },
  ],
};
