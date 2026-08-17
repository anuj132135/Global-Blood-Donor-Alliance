import React from "react";
import {Envelope} from '@gravity-ui/icons';
import {Handset} from '@gravity-ui/icons';
import {LocationArrow} from '@gravity-ui/icons';

function Policy() {
  return (
    <div className="my-10 lg:w-[80%] p-8 mx-auto bg-[var(--bg-box-color)] rounded-xl">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <h2 className="text-2xl my-4">Last Updated: August 5, 2026</h2>

      <p className="my-4">
        Global Blood Donor Alliance respects your privacy and is committed to
        protecting your personal information. This Privacy Policy explains what
        information we collect, how we use it, how we protect it, and what
        choices you have when using our platform.
      </p>

      <p className="my-4">
        By using our website, application, or services, you agree to the
        practices described in this Privacy Policy.
      </p>

      <ol className="list-decimal">
        <li className="text-3xl m-8">Information We Collect</li>

        <p className="my-4">
          We may collect the following information when you register or use our
          platform:
        </p>

        <h3 className="text-2xl my-4">Personal Information</h3>

        <ul className="list-disc m-8">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Date of birth</li>
          <li>Gender</li>
          <li>Profile photo, if provided</li>
        </ul>

        <h3 className="text-2xl my-4">Blood Donation Information</h3>

        <ul className="list-disc m-8">
          <li>Blood group</li>
          <li>Donation history</li>
          <li>Last donation date</li>
          <li>Donation eligibility information</li>
          <li>Donor availability status</li>
        </ul>

        <h3 className="text-2xl my-4">Location Information</h3>

        <ul className="list-disc m-8">
          <li>Country</li>
          <li>State</li>
          <li>City</li>
          <li>Address</li>
          <li>
            Approximate location, where location-based services are enabled
          </li>
        </ul>

        <h3 className="text-2xl my-4">Blood Request Information</h3>

        <p className="my-4">When submitting a blood request, we may collect:</p>

        <ul className="list-disc m-8">
          <li>Patient or requester name</li>
          <li>Required blood group</li>
          <li>Number of units required</li>
          <li>Hospital information</li>
          <li>Required date</li>
          <li>Emergency status</li>
          <li>Contact information</li>
          <li>Additional information provided with the request</li>
        </ul>

        <h3 className="text-2xl my-4">Account Information</h3>

        <ul className="list-disc m-8">
          <li>Login credentials</li>
          <li>Account type or role</li>
          <li>Verification status</li>
          <li>Account preferences</li>
          <li>Notification preferences</li>
        </ul>

        <h3 className="text-2xl my-4">Technical Information</h3>

        <p className="my-4">
          We may automatically collect limited technical information such as:
        </p>

        <ul className="list-disc m-8">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Operating system</li>
          <li>Log data</li>
          <li>Pages or features accessed</li>
          <li>Date and time of activity</li>
        </ul>

        <li className="text-3xl m-8">How We Use Your Information</li>

        <p className="my-4">We may use collected information to:</p>

        <ul className="list-disc m-8">
          <li>Create and manage your account.</li>
          <li>Verify user and donor information.</li>
          <li>Help users find compatible donors.</li>
          <li>Process blood and emergency blood requests.</li>
          <li>Match donors based on blood group and location.</li>
          <li>Send relevant notifications and alerts.</li>
          <li>Connect users with hospitals and blood banks.</li>
          <li>Maintain donation history.</li>
          <li>Improve platform functionality and user experience.</li>
          <li>
            Protect the platform from fraud, misuse, and unauthorized access.
          </li>
          <li>Respond to support requests.</li>
          <li>Comply with applicable legal requirements.</li>
        </ul>

        <li className="text-3xl m-8">Donor Profile Visibility</li>

        <p className="my-4">
          If you register as a donor, certain information may be displayed to
          other authorized users to help them identify and contact suitable
          donors.
        </p>

        <p className="my-4">
          Depending on your privacy settings and platform functionality, this
          may include:
        </p>

        <ul className="list-disc m-8">
          <li>Name</li>
          <li>Blood group</li>
          <li>City or general location</li>
          <li>Donor availability</li>
          <li>Donation status</li>
          <li>Relevant donor information</li>
        </ul>

        <p className="my-4">
          We will not intentionally display sensitive account credentials such
          as your password.
        </p>

        <li className="text-3xl m-8">Blood Request Information</li>

        <p className="my-4">
          When you submit a blood request, relevant request information may be
          shared with appropriate donors, hospitals, or blood banks to help
          fulfill the request.
        </p>

        <p className="my-4">
          Emergency blood requests may be distributed more broadly to eligible
          or nearby donors based on available matching information.
        </p>

        <p className="my-4">
          Users should avoid including unnecessary sensitive personal
          information in public request descriptions.
        </p>

        <li className="text-3xl m-8">Location Information</li>

        <p className="my-4">Location information may be used to:</p>

        <ul className="list-disc m-8">
          <li>Find nearby donors.</li>
          <li>Find nearby hospitals.</li>
          <li>Find nearby blood banks.</li>
          <li>Improve location-based matching.</li>
          <li>Support emergency blood requests.</li>
        </ul>

        <p className="my-4">
          We may use approximate location rather than your exact location where
          appropriate.
        </p>

        <p className="my-4">
          You may be able to control location permissions through your device or
          account settings.
        </p>

        <li className="text-3xl m-8">Communication and Notifications</li>

        <p className="my-4">
          We may use your email address, phone number, or in-app notification
          system to send:
        </p>

        <ul className="list-disc m-8">
          <li>Blood request notifications</li>
          <li>Emergency blood alerts</li>
          <li>Donation reminders</li>
          <li>Account verification messages</li>
          <li>Security alerts</li>
          <li>Important service updates</li>
          <li>Support communications</li>
        </ul>

        <p className="my-4">
          You may be able to manage certain notifications through your account
          settings.
        </p>

        <li className="text-3xl m-8">Information Sharing</li>

        <p className="my-4">We do not sell your personal information.</p>

        <p className="my-4">
          We may share relevant information when necessary to provide our
          services, including with:
        </p>

        <ul className="list-disc m-8">
          <li>Compatible or nearby donors</li>
          <li>Blood recipients or requesters</li>
          <li>Registered hospitals</li>
          <li>Registered blood banks</li>
          <li>Service providers supporting our platform</li>
          <li>Authorities where required by applicable law</li>
        </ul>

        <p className="my-4">
          We only intend to share information that is reasonably necessary for
          the relevant purpose.
        </p>

        <li className="text-3xl m-8">Hospitals and Blood Banks</li>

        <p className="my-4">
          Hospitals and blood banks may receive relevant user or blood request
          information when necessary to respond to blood requirements or provide
          related services.
        </p>

        <p className="my-4">
          Their handling of information may also be subject to their own privacy
          policies and applicable laws.
        </p>

        <li className="text-3xl m-8">Third-Party Services</li>

        <p className="my-4">
          We may use third-party service providers for functions such as:
        </p>

        <ul className="list-disc m-8">
          <li>Authentication</li>
          <li>Hosting</li>
          <li>Database management</li>
          <li>Email delivery</li>
          <li>SMS or notification delivery</li>
          <li>Analytics</li>
          <li>Security</li>
          <li>Cloud storage</li>
        </ul>

        <p className="my-4">
          These providers may process information on our behalf to provide their
          services.
        </p>

        <p className="my-4">
          We do not authorize third parties to use your information for purposes
          unrelated to the services they provide to us, subject to their own
          legal obligations and policies.
        </p>

        <li className="text-3xl m-8">Data Security</li>

        <p className="my-4">
          We use reasonable technical and organizational measures to protect
          personal information from unauthorized access, alteration, disclosure,
          misuse, or destruction.
        </p>

        <p className="my-4">Security measures may include:</p>

        <ul className="list-disc m-8">
          <li>Secure authentication</li>
          <li>Password hashing</li>
          <li>Access controls</li>
          <li>Encryption where appropriate</li>
          <li>Secure server infrastructure</li>
          <li>Monitoring and security practices</li>
        </ul>

        <p className="my-4">
          However, no internet-based system can guarantee absolute security.
        </p>

        <li className="text-3xl m-8">Password Security</li>

        <p className="my-4">
          Your password should be unique and kept confidential.
        </p>

        <p className="my-4">
          Global Blood Donor Alliance will not ask you to disclose your account
          password through unsolicited messages.
        </p>

        <p className="my-4">
          If you believe your account has been compromised, contact us and
          change your password immediately.
        </p>

        <li className="text-3xl m-8">Data Retention</li>

        <p className="my-4">
          We retain personal information only for as long as reasonably
          necessary to:
        </p>

        <ul className="list-disc m-8">
          <li>Provide our services.</li>
          <li>Maintain account records.</li>
          <li>Support donation and blood request history.</li>
          <li>Meet legal or regulatory obligations.</li>
          <li>Resolve disputes.</li>
          <li>Prevent fraud and misuse.</li>
          <li>Protect the security of our platform.</li>
        </ul>

        <p className="my-4">
          When information is no longer required, we may delete, anonymize, or
          securely dispose of it, subject to applicable legal requirements.
        </p>

        <li className="text-3xl m-8">Account Deletion</li>

        <p className="my-4">
          You may request deletion of your account and personal information
          through the available account settings or by contacting us.
        </p>

        <p className="my-4">
          Some information may need to be retained when required by law,
          necessary for legitimate security purposes, or required to resolve
          disputes and maintain appropriate records.
        </p>

        <li className="text-3xl m-8">Your Privacy Rights</li>

        <p className="my-4">
          Depending on applicable law, you may have rights relating to your
          personal information, including the ability to:
        </p>

        <ul className="list-disc m-8">
          <li>Access your information.</li>
          <li>Correct inaccurate information.</li>
          <li>Update your profile.</li>
          <li>Request deletion of information.</li>
          <li>Withdraw certain permissions or consents.</li>
          <li>Manage notification preferences.</li>
          <li>Ask questions about how your information is used.</li>
        </ul>

        <p className="my-4">
          Requests may be subject to identity verification and applicable legal
          requirements.
        </p>

        <li className="text-3xl m-8">Cookies and Similar Technologies</li>

        <p className="my-4">We may use cookies and similar technologies to:</p>

        <ul className="list-disc m-8">
          <li>Keep you signed in.</li>
          <li>Maintain session security.</li>
          <li>Remember preferences.</li>
          <li>Understand platform usage.</li>
          <li>Improve performance and functionality.</li>
        </ul>

        <p className="my-4">
          You may be able to control cookies through your browser settings.
          Disabling certain cookies may affect some platform features.
        </p>

        <li className="text-3xl m-8">Children's Privacy</li>

        <p className="my-4">
          Our platform is not intended for individuals who are not legally
          permitted to create an account under applicable law.
        </p>

        <p className="my-4">
          We do not knowingly collect personal information from children in
          violation of applicable legal requirements.
        </p>

        <p className="my-4">
          If you believe a child has provided personal information improperly,
          please contact us so that appropriate action can be taken.
        </p>

        <li className="text-3xl m-8">Emergency Situations</li>

        <p className="my-4">
          During an emergency blood request, we may process and share relevant
          information more quickly to help connect the requester with compatible
          donors, hospitals, or blood banks.
        </p>

        <p className="my-4">
          Only information reasonably necessary for the emergency response
          should be provided.
        </p>

        <p className="my-4">
          The platform does not guarantee that an emergency request will result
          in blood availability or medical assistance.
        </p>

        <li className="text-3xl m-8">User Responsibilities</li>

        <p className="my-4">You are responsible for:</p>

        <ul className="list-disc m-8">
          <li>Providing accurate information.</li>
          <li>Keeping your account information updated.</li>
          <li>Protecting your login credentials.</li>
          <li>Avoiding unnecessary sensitive information in public areas.</li>
          <li>
            Not sharing another person's information without authorization.
          </li>
          <li>Using the platform lawfully.</li>
        </ul>

        <li className="text-3xl m-8">Changes to This Privacy Policy</li>

        <p className="my-4">
          We may update this Privacy Policy when our services, technology, or
          legal requirements change.
        </p>

        <p className="my-4">
          The updated policy will be published on this page with a revised{" "}
          <b>Last Updated</b> date.
        </p>

        <p className="my-4">
          We encourage users to review this policy periodically.
        </p>

        <li className="text-3xl m-8">Contact Us</li>

        <p className="my-4">
          If you have questions, concerns, or requests regarding this Privacy
          Policy, contact us:
        </p>

        <b>Global Blood Donor Alliance</b>

        <p className="my-4 flex items-center">
          <Envelope className="mx-2" />
          Email: support@globalblooddonoralliance.org
        </p>

        <p className="my-4 flex items-center">
          <Handset className="mx-2" />
          Phone: +91 XXXXX XXXXX
        </p>

        <p className="my-4 flex items-center">
          <LocationArrow className="mx-2" />
          Address: Kanpur, Uttar Pradesh, India
        </p>
      </ol>

      <div className="mt-10">
        <h2 className="text-3xl my-6">Privacy Agreement</h2>

        <p className="my-4">
          By creating an account or using Global Blood Donor Alliance, you
          acknowledge that you have read and understood this Privacy Policy and
          understand how your information may be collected, used, and shared as
          described above.
        </p>
      </div>
    </div>
  );
}

export default Policy;
