// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// ✅ User Pages
import LoginPage from "./UserSide/loginpage.jsx";
import SignIn from "./UserSide/signin.jsx";
import FillProfilePage from "./UserSide/fillProfilePage.jsx";
import ForgotPassword from "./UserSide/forgotPassword.jsx";
import ConformPassword from "./UserSide/conformPassword.jsx";
import VerifyOtp from "./UserSide/verifyOtp.jsx";
import CongratulationsMan from "./UserSide/congratsman.jsx";
import CongratulationsPass from "./UserSide/congratspass.jsx";
import WelcomePage from "./UserSide/welcomepage.jsx";
import AllowLocationPopup from "./UserSide/AllowLocationPopup.jsx";
import Home from "./home.jsx";
import AllCategory from "./UserSide/AllCategory.jsx";
import DeliveryService from "./UserSide/deliveryservice.jsx";
import SearchScreen from "./UserSide/SearchScreen.jsx";
import CakeDelivery from "./UserSide/CakeDelivery.jsx";
import FilterComponent from "./components/ui/FilterComponent.jsx";
import ProfilePage from "./UserSide/profilePage.jsx";
import RequestServiceForm from "./UserSide/requestServiceForm.jsx";
import BookingsPage from "./UserSide/bookingPage.jsx";
import BookingDetailsPage from "./UserSide/bookingDetailsPage.jsx";
import PaymentMethodsPage from "./UserSide/paymentMethod.jsx";
import Congratsstar from "./UserSide/congratsstar.jsx";
import EReceiptPage from "./UserSide/eReceiptPage.jsx";
import ReviewUploadPage from "./UserSide/reviewupload.jsx";
import ReviewsPage from "./UserSide/reviewPage.jsx";
import AddCardPage from "./UserSide/addCardPage.jsx";
import JobPage from "./UserSide/jobspage.jsx";
import ServiceDetails from "./UserSide/serviceDetail.jsx";
import ComplaintForm from "./UserSide/complaintForm.jsx";
import ComplaintPage from "./UserSide/complaintpage.jsx";
import ServiceComplete from "./UserSide/serviceComplete.jsx";
import TransactionPage from "./UserSide/transactionPage.jsx";
import ServicesPage from "./UserSide/servicePage.jsx";
import Profile from "./UserSide/profile.jsx";
import EditProfilePage from "./UserSide/editProfilePage.jsx";
import SideMenu from "./components/ui/sideMenu.jsx";
import AboutPage from "./UserSide/aboutPage.jsx";
import Terms from "./UserSide/terms.jsx";
import NotificationsPage from "./components/ui/Notification.jsx";
import HelpCenterPage from "./UserSide/helpCenter.jsx";
import NotificationSettings from "./UserSide/notificationSettings.jsx";
import Security from "./components/ui/security.jsx";
import ChatPage from "./components/ui/layout/ChatCallPage.jsx";
import MessagePage from "./components/ui/messagePage.jsx";
import InviteFriend from "./UserSide/inviteFriend.jsx";

// ✅ Admin Pages
import AdminGeneralSettings from "./AdminPages/AdminGeneralSettings.jsx";
import BannnerAds from "./AdminPages/BannerAdPage.jsx";
import AdsManagement126 from "./AdminPages/AdsManagement126.jsx";

// ✅ Admin Components (optional)
import SideMenuDesk from "./AdminPages/componentsAdmin/AdminSideMenu.jsx";
import QuickStatus from "./AdminPages/componentsAdmin/QuickStatus.jsx";
import PerformanceChart from "./AdminPages/componentsAdmin/PerformanceChart.jsx";
import AdTypeForm from "./AdminPages/Adtypeform.jsx";
import NotificationManagement from "./AdminPages/AdminNotification.jsx";
import AccountsPage from "./AdminPages/AccountPage.jsx";
import IncomeManagement from "./AdminPages/IncomeManagementPage.jsx";
import FinancePage from "./AdminPages/FinancePage.jsx";
import PayoutSchedule from "./AdminPages/PayoutSchedulePage.jsx";

function App() {
  return (
    <Routes>
      {/* --- Auth Routes --- */}
      <Route path="/" element={<WelcomePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/fillprofile" element={<FillProfilePage />} />
      <Route path="/forgetpassword" element={<ForgotPassword />} />
      <Route path="/forgetpassword/conformpassword" element={<ConformPassword />} />
      <Route path="/verifyotp" element={<VerifyOtp />} />
      <Route path="/congrats" element={<CongratulationsMan />} />
      <Route path="/forgetpassword/conformpassword/congratspass" element={<CongratulationsPass />} />
      <Route path="/allowlocation" element={<AllowLocationPopup />} />

      {/* --- Main User App Routes --- */}
      <Route path="/home" element={<Home />} />
      <Route path="/allcategory" element={<AllCategory />} />
      <Route path="/allcategory/deliveryservice" element={<DeliveryService />} />
      <Route path="/allcategory/cakedelivery" element={<CakeDelivery />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="/filterpage" element={<FilterComponent />} />
      <Route path="/profilepage" element={<ProfilePage />} />
      <Route path="/requestservice" element={<RequestServiceForm />} />
      <Route path="/bookingpage" element={<BookingsPage />} />
      <Route path="/bookingdetails" element={<BookingDetailsPage />} />
      <Route path="/paymentmethod" element={<PaymentMethodsPage />} />
      <Route path="/congratsstar" element={<Congratsstar />} />
      <Route path="/ereceipt" element={<EReceiptPage />} />
      <Route path="/reviewupload" element={<ReviewUploadPage />} />
      <Route path="/reviewpage" element={<ReviewsPage />} />
      <Route path="/addcard" element={<AddCardPage />} />
      <Route path="/job" element={<JobPage />} />
      <Route path="/servicedetail" element={<ServiceDetails />} />
      <Route path="/complaintform" element={<ComplaintForm />} />
      <Route path="/complaintpage" element={<ComplaintPage />} />
      <Route path="/servicecomplete" element={<ServiceComplete />} />
      <Route path="/transactionpage" element={<TransactionPage />} />
      <Route path="/servicepage" element={<ServicesPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/editprofile" element={<EditProfilePage />} />
      <Route path="/sidemenu" element={<SideMenu />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/notification" element={<NotificationsPage />} />
      <Route path="/help" element={<HelpCenterPage />} />
      <Route path="/settings" element={<NotificationSettings />} />
      <Route path="/security" element={<Security />} />
      <Route path="/chatcall" element={<ChatPage />} />
      <Route path="/message" element={<MessagePage />} />
      <Route path="/invite" element={<InviteFriend />} />

      {/* --- Admin Routes --- */}
      <Route path="/admin/generalsettings" element={<AdminGeneralSettings />} />
      <Route path="/admin/bannerads" element={<BannnerAds />} />
      {/* <Route path="/admin/adsmanagement" element={<AdsManagement126 />} /> */}
      <Route path="/admin/adtype" element={<AdTypeForm />} />
      <Route path="/admin/adnotification" element={<NotificationManagement />} />
      <Route path="/admin/account" element={<AccountsPage />} />
      <Route path="/admin/income" element={<IncomeManagement />} />
      <Route path="/admin/finance" element={<FinancePage />} />
      <Route path="/admin/payout" element={<PayoutSchedule />} />


      {/* --- 404 --- */}
      < Route path="*" element={<h1 className="text-center mt-10 text-2xl font-semibold">404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
