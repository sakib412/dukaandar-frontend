import InviteUserModal from "./common/Modal/inviteUser";
import WelcomeMessageModal from "./common/Modal/welcomeMessageModal";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import ActivitySidebar from "./SideBar/activitySidebar";
import KeyboardShortcutsSidebar from "./SideBar/keyboardShortcutsSidebar";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <SideBar />

            <main id="content" role="main" className="main pointer-event">
                {children}
                <Footer />
            </main>

            <KeyboardShortcutsSidebar />
            <ActivitySidebar />
            <WelcomeMessageModal />
            <InviteUserModal />
        </>
    )
}