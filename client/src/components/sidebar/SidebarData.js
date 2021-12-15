import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Battle',
        path: '/overview/battle',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Practice',
        path: '/overview/practice',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Tournaments',
        path: '/overview/tournaments',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Learn',
    path: '/learn',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'GeeksForGeeks',
        path: '/learn/geeksforgeeks',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'HackerRank',
        path: '/learn/hackerrank',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Codechef',
        path: '/learn/codechef',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Watch',
    path: '/watch',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Community',
    path: '/community',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Coders',
        path: '/community/coders',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Teams',
        path: '/community/teams',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Forum',
        path: '/community/forum',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];