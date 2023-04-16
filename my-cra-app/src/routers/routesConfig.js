import HomePage from "../crapages/HomePage";
// import MobileHomepage from 'src/mobile/pages/Homepage'
// import MobileClinicList from 'src/mobile/pages/ClinicList'
// import MobileClinicDetail from 'src/mobile/pages/ClinicDetail'
import SignIn from "../crapages/auth/SignIn";
// import MobileSignIn from 'src/mobile/pages/auth/SignIn'
// import SignUp from 'src/pages/auth/SignUp'
// import MobileSignUp from 'src/mobile/pages/auth/SignUp'
// import ForgotPassword from 'src/pages/auth/ForgotPassword'
// import MobileForgotPassword from 'src/mobile/pages/auth/ForgotPassword'
// import OrderList from 'src/pages/order/OrderList'
// import MobileOrderList from 'src/mobile/pages/order/OrderList'
// import OrderInfo from 'src/components/OrderInfo'
// import MobileOrderInfo from 'src/mobile/pages/order/OrderInfo'
import About from "../crapages/About";
// import Follow from 'src/mobile/pages/FollowUs'
// import ContactUs from 'src/mobile/pages/ContactUs'
// import DoctorList from 'src/pages/Doctor'
// import MobileDoctorList from 'src/mobile/pages/DoctorList'
// import MobileDoctorDetail from 'src/mobile/pages/DoctorDetail'
// import Questions from 'src/pages/Questions'
// import MobileQuestions from 'src/mobile/pages/Questions'
// import MobilePromotion from 'src/mobile/pages/Promotion'
// import AddOrder from 'src/pages/addOrder'
// import MobileAddOrder from 'src/mobile/pages/order/AddOrder'
// import Agreement from 'src/pages/Agreement'
// import MobileAgreement from 'src/mobile/pages/Agreement'
// import ProfileAccount from 'src/pages/ProfileAccount'
// import Promotion from 'src/pages/Promotion'
// import MobileProfile from 'src/mobile/pages/Profile'
// import MobileProfileAccount from 'src/mobile/pages/ProfileAccount'
// import PcPageHolder from 'src/mobile/pages/PcPageHolder'
// import PayingMobile from 'src/mobile/pages/order/Paying'
// import Paying from 'src/pages/addOrder/Paying'
// import ProductInfo from 'src/pages/ProductInfo'
// import ProductInfoNPC from 'src/pages/ProductInfoNPC'
// import ProductHealthCheck from 'src/pages/ProductHealthCheck'
// import PreDetail from 'src/mobile/components/Order/Detail'

const baseRoutes = [
  {
    path: "/page-2a",
    component: HomePage,
    // mobileComponent: MobileHomepage,
    header: null,
    bgColor: "background.default",
  },
  {
    path: "/page-2a/about",
    component: About,
    // component: PcPageHolder,
    // mobileComponent: About,
    header: {
      title: "glossary.about_take2",
      goBack: true,
    },
    bgColor: "background.default",
  },
];

const authRoutes = [
  {
    path: "/page-2a/signin",
    component: SignIn,
    // mobileComponent: MobileSignIn,
  },
  // {
  //   path: '/signup',
  //   component: SignUp,
  //   mobileComponent: MobileSignUp,
  // },
  // {
  //   path: '/forgot-password',
  //   component: ForgotPassword,
  //   mobileComponent: MobileForgotPassword,
  // },
];

// const userRoutes = [
//   {
//     title: 'glossary.appointment_order',
//     path: '/profile/order',
//     component: OrderList,
//     mobileComponent: MobileOrderList,
//     header: {
//       title: 'glossary.appointment_order',
//       goBack: true,
//     },
//     bgColor: 'background.default',
//   },
//   {
//     title: 'glossary.appointment_detail',
//     path: '/profile/order/:orderNumber',
//     component: OrderInfo,
//     mobileComponent: MobileOrderInfo,
//     header: {
//       title: 'glossary.appointment_summary',
//       goBack: true,
//     },
//     withFixedButton: true,
//     bgColor: 'background.default',
//   },
//   {
//     title: 'glossary.account_setting',
//     path: '/profile/account',
//     component: ProfileAccount,
//     mobileComponent: MobileProfileAccount,
//     header: {
//       title: 'glossary.enter_personal_info',
//       goBack: true,
//     },
//     withFixedButton: true,
//     bgColor: 'background.default',
//   },
//   {
//     title: 'glossary.account_setting',
//     path: '/profile',
//     component: PcPageHolder,
//     mobileComponent: MobileProfile,
//   },
// ]

export { baseRoutes, authRoutes };
