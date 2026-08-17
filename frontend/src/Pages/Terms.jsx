import React from 'react'
import {Envelope} from '@gravity-ui/icons';
import {Handset} from '@gravity-ui/icons';
import {LocationArrow} from '@gravity-ui/icons';

function Terms() {
  return (
    <>
        <div className='my-10 lg:w-[80%] p-8 mx-auto bg-[var(--bg-box-color)] rounded-xl'>
            <h1 className='text-4xl font-bold'>Terms & Conditions</h1>
            <h2 className='text-2xl my-4'>Last Updated: August 5, 2026</h2>
            <p className='my-4'>Welcome to <b>Global Blood Donor Alliance</b>. These Terms & Conditions govern your access to and use of our website, application, and related services.</p>
            <p className='my-4'>By creating an account or using our platform, you agree to these Terms & Conditions. If you do not agree with any part of these terms, please do not use the platform.</p>
            <ol className='list-decimal'>
                <li className='text-3xl m-8'>About the Platform</li>
                <p className='my-4'>Global Blood Donor Alliance is a technology platform designed to connect blood donors, blood recipients, hospitals, and blood banks.</p>
                <p className='my-4'>The platform may provide services including:</p>
                <ul className='list-disc m-8'>
                    <li>Donor registration and profile management</li>
                    <li>Blood donor search</li>
                    <li>Blood requests</li>
                    <li>Emergency blood requests</li>
                    <li>Hospital and blood bank directories</li>
                    <li>Blood group compatibility information</li>
                    <li>Donation history and eligibility information</li>
                    <li>Notifications and communication between users</li>
                </ul>
                <p className="my-4">The platform facilitates connections and information sharing. It does not itself provide medical treatment, perform blood transfusions, or guarantee blood availability.</p>
                <li className="text-3xl m-8">User Eligibility</li>
                <p className="my-4">To use the platform, you must:</p>
                <ul className='list-disc m-8'>
                    <li>Provide accurate and complete information.</li>
                    <li>Be legally permitted to use the platform.</li>
                    <li>Provide truthful contact and profile information.</li>
                    <li>Keep your account information updated.</li>
                    <li>Follow applicable blood donation and healthcare requirements.</li>
                </ul>
                <p className='my-4'>Blood donation eligibility is determined by qualified medical professionals and applicable medical guidelines. Creating a donor account does not automatically mean that you are eligible to donate blood.</p>
                <li className="text-3xl m-8">Account Registration</li>
                <p className='my-4'>When creating an account, you are responsible for providing accurate information, including where applicable:</p>
                 <ul className='list-disc m-8'>
                    <li>Full name</li>
                    <li>Email Address</li>
                    <li>Mobile Number</li>
                    <li>Password</li>
                    <li>Confirm Password</li>
                    <li>Gender</li>
                    <li>Date of Birth</li>
                    <li>Blood Group</li>
                    <li>Weight</li>
                    <li>Last Blood Donation Date</li>
                    <li>City</li>
                    <li>State</li>
                    <li>Pincode</li>
                    <li>Address</li>
                </ul>
                <p className='my-4'>You are responsible for maintaining the confidentiality of your login credentials and for activities performed through your account.</p>
                <p className='my-4'>You must immediately notify us if you suspect unauthorized access to your account.</p>
                <li className="text-3xl m-8">Donor Information</li>
                <p className="my-4">Donors are responsible for ensuring that their blood group, availability, donation history, and other relevant information are accurate.</p>
                <p className="my-4">Donor availability shown on the platform does not guarantee that the donor:</p>
                <ul className="list-disc m-8">
                    <li>Is currently eligible to donate.</li>
                    <li>Will respond to a request.</li>
                    <li>Will be medically suitable for a particular patient.</li>
                    <li>Will be available at the required time.</li>
                </ul>
                <p className="my-4">Final donor eligibility and blood compatibility must be confirmed by an authorized healthcare professional.</p>
                <li className="text-3xl m-8">Blood Requests</li>
                <p className="my-4">Users may create blood requests by providing accurate information about the requirement.</p>
                <p className="my-4">A request may include:</p>
                <ul className="list-disc m-8">
                    <li>Required blood group</li>
                    <li>Number of units required</li>
                    <li>Hospital or treatment location</li>
                    <li>Required date</li>
                    <li>Emergency status</li>
                    <li>Patient or requester information</li>
                    <li>Contact information</li>
                </ul>
                <p className="my-4">Users must not create false, misleading, duplicate, or fraudulent blood requests.</p>
                <li className="text-3xl m-8">Emergency Blood Requests</li>
                <p className="my-4">Emergency Blood Requests are intended for genuine urgent medical situations.</p>
                <p className="my-4">Users must provide truthful and accurate information when submitting an emergency request.</p>
                <p className="my-4">The platform may notify compatible or nearby donors, hospitals, or blood banks based on the information available.</p>
                <b className="my-4">An emergency request does not guarantee that blood will be found, reserved, delivered, or provided within a specific time.</b>
                <p className="my-4">In a medical emergency, users should also contact appropriate emergency medical services, hospitals, blood banks, or qualified healthcare professionals without relying solely on the platform.</p>
                <li className="text-3xl m-8">Medical Disclaimer</li>
                <p className="my-4">Global Blood Donor Alliance is <b>not a hospital, blood bank, medical provider, or medical authority.</b></p>
                <p className="my-4">Information available on the platform, including blood group compatibility, donation eligibility, and general blood donation information, is provided for informational purposes only.</p>
                <p className="my-4">The platform does not provide medical diagnosis, treatment, or professional medical advice.</p>
                <p className="my-4">Blood transfusion decisions, donor eligibility, blood testing, cross-matching, and medical procedures must be determined by qualified healthcare professionals.</p>
                <li className="text-3xl m-8">Blood Compatibility</li>
                <p className="my-4">Blood compatibility information provided on the platform is intended as general educational information.</p>
                <p className="my-4">Actual transfusion compatibility must always be confirmed through appropriate medical testing and professional procedures.</p>
                <p className="my-4">Users must not rely solely on information displayed on the platform to make medical or transfusion decisions.</p>
                <li className="text-3xl m-8">Hospitals and Blood Banks</li>
                <p className="my-4">Hospitals and blood banks using the platform are responsible for providing accurate information about their organization, services, contact details, operating hours, and blood availability.</p>
                <p className="my-4">Global Blood Donor Alliance does not guarantee:</p>
                <ul className="list-disc m-8">
                    <li>Blood stock availability.</li>
                    <li>Hospital or blood bank availability.</li>
                    <li>Quality of medical services.</li>
                    <li>Accuracy of third-party information.</li>
                    <li>Response times.</li>
                    <li>Acceptance of a blood request.</li>
                </ul>
                <p className="my-4">Users should confirm availability directly with the relevant hospital or blood bank.</p>
                <li className="text-3xl m-8">User Conduct</li>
                <p className="my-4">You agree not to:</p>
                <ul className="list-disc m-8">
                    <li>Provide false or misleading information.</li>
                    <li>Create fake donor or recipient profiles.</li>
                    <li>Submit fraudulent blood requests.</li>
                    <li>Misuse emergency blood requests.</li>
                    <li>Harass, threaten, or abuse another user.</li>
                    <li>Attempt to obtain another person's private information without authorization.</li>
                    <li>Impersonate another person, hospital, blood bank, or organization.</li>
                    <li>Use the platform for illegal activities.</li>
                    <li>Attempt to gain unauthorized access to the platform.</li>
                    <li>Upload malicious software or harmful content.</li>
                    <li>Use the platform for spam, advertising, or unauthorized commercial activity.</li>
                </ul>
                <li className="text-3xl m-8">Communication Between Users</li>
                <p className="my-4">The platform may allow donors, recipients, hospitals, and blood banks to communicate with one another.</p>
                <p className="my-4">Users are responsible for their own interactions and communications.</p>
                <p className="my-4">Global Blood Donor Alliance does not guarantee the identity, intentions, availability, or conduct of another user unless explicitly stated as verified by the platform.</p>
                <p className="my-4">Users should exercise appropriate caution when sharing personal information or arranging donations.</p>
                <li className="text-3xl m-8">Verification</li>
                <p className="my-4">We may verify user, donor, hospital, or blood bank information using available verification methods.</p>
                <p className="my-4">A <b>verified</b> status does not constitute a medical certification, guarantee of eligibility, guarantee of blood availability, or guarantee of a user's conduct.</p>
                <p className="my-4">We may suspend or remove verification where information is found to be inaccurate or misleading.</p>
                <li className="text-3xl m-8">Privacy</li>
                <p className="my-4">Your use of the platform is also subject to our <b>Privacy Policy</b>.</p>
                <p className="my-4">We may collect and process information necessary to provide platform services, including account, contact, location, donation, and request-related information.</p>
                <p className="my-4">We will handle personal information according to our Privacy Policy and applicable laws.</p>
                <li className="text-3xl m-8">Location Information</li>
                <p className="my-4">Some platform features may use location information to help users find nearby donors, hospitals, or blood banks.</p>
                <p className="my-4">Location-based results may not always be exact or up to date.</p>
                <p className="my-4">Users should verify important location and availability information before relying on it.</p>
                <li className="text-3xl m-8">Notifications</li>
                <p className="my-4">By using the platform, users may receive notifications relating to:</p>
                <ul className="list-disc m-8">
                    <li>Blood requests</li>
                    <li>Emergency blood requests</li>
                    <li>Donation opportunities</li>
                    <li>Account activity</li>
                    <li>Verification</li>
                    <li>Security</li>
                    <li>Platform updates</li>
                </ul>
                <p className="my-4">Users may be able to control certain notification preferences through their account settings.</p>
                <li className="text-3xl m-8">User-Generated Content</li>
                <p className="my-4">Users may submit information, reviews, feedback, profile details, and other content.</p>
                <p className="my-4">You are responsible for ensuring that content you submit is accurate, lawful, and does not violate another person's rights.</p>
                <p className="my-4">We reserve the right to remove content that violates these Terms & Conditions or applicable law.</p>
                <li className="text-3xl m-8">Intellectual Property</li>
                <p className="my-4">The Global Blood Donor Alliance name, logo, design, software, graphics, text, content, and other platform materials are protected by applicable intellectual property laws.</p>
                <p className="my-4">You may not copy, reproduce, modify, distribute, sell, or commercially exploit platform content without prior authorization.</p>
                <li className="text-3xl m-8">Third-Party Services and Links</li>
                <p className="my-4">The platform may contain links or references to third-party websites, hospitals, blood banks, services, or other resources.</p>
                <p className="my-4">We are not responsible for the content, availability, accuracy, security, or practices of third-party services.</p>
                <li className="text-3xl m-8">Service Availability</li>
                <p className="my-4">We aim to keep the platform available and reliable but do not guarantee uninterrupted or error-free operation.</p>
                <p className="my-4">The platform may occasionally be unavailable because of:</p>
                <ul className="list-disc m-8">
                    <li>Maintenance</li>
                    <li>Updates</li>
                    <li>Technical failures</li>
                    <li>Network problems</li>
                    <li>Security incidents</li>
                    <li>Third-party service failures</li>
                    <li>Circumstances beyond our control</li>
                </ul>
                <li className="text-3xl m-8">Account Suspension and Termination</li>
                <p className="my-4">We may suspend, restrict, or terminate an account if we reasonably believe that the user:</p>
                <ul className="list-disc m-8">
                    <li>Violates these Terms & Conditions.</li>
                    <li>Provides false information.</li>
                    <li>Creates fraudulent requests.</li>
                    <li>Misuses the platform.</li>
                    <li>Engages in harmful or illegal activity.</li>
                    <li>Attempts unauthorized access.</li>
                    <li>Poses a risk to other users or the platform.</li>
                </ul>
                <p className="my-4">Users may also request account deletion according to the applicable account and privacy procedures.</p>
                <li className="text-3xl m-8">Limitation of Liability</li>
                <p className="my-4">To the extent permitted by applicable law, Global Blood Donor Alliance will not be responsible for losses arising from:</p>
                <ul className="list-disc m-8">
                    <li>Failure to find a donor.</li>
                    <li>Failure of a donor to respond.</li>
                    <li>Unavailability of blood.</li>
                    <li>Incorrect or outdated user-provided information.</li>
                    <li>Actions or conduct of users.</li>
                    <li>Actions of hospitals or blood banks.</li>
                    <li>Medical decisions or treatment.</li>
                    <li>Delays in emergency situations.</li>
                    <li>Third-party services.</li>
                    <li>Technical interruptions or platform downtime.</li>
                </ul>
                <p className="my-4">The platform should not be treated as a replacement for professional medical care or emergency services.</p>
                <li className="text-3xl m-8">Indemnification</li>
                <p className="my-4">You agree to the extent permitted by law to be responsible for claims, losses, damages, liabilities, or expenses arising from your:</p>
                <ul className="list-disc m-8">
                    <li>Violation of these Terms & Conditions.</li>
                    <li>Misuse of the platform.</li>
                    <li>Fraudulent or misleading information.</li>
                    <li>Violation of another person's rights.</li>
                    <li>Illegal activities.</li>
                </ul>
                <li className="text-3xl m-8">Changes to These Terms</li>
                <p className="my-4">We may update these Terms & Conditions when necessary.</p>
                <p className="my-4">Updated terms will be published on this page along with a revised Last Updated date.</p>
                <p className="my-4">Continued use of the platform after changes take effect constitutes acceptance of the updated terms, subject to applicable law.</p>
                <p className="my-4">These Terms & Conditions shall be governed by the applicable laws of India, subject to the jurisdiction of the appropriate courts.</p>
                <li className="text-3xl m-8">Contact Us</li>
                <p className="my-4">If you have questions, concerns, or complaints regarding these Terms & Conditions, contact us:</p>
                <b>Global Blood Donor Alliance</b>
                <p className="my-4 flex items-center"><Envelope className='mx-2'/>Email: support@globalblooddonoralliance.org</p>
                <p className="my-4 flex items-center"><Handset className='mx-2'/>Phone: +91 XXXXX XXXXX</p>
                <p className="my-4 flex items-center"><LocationArrow className='mx-2'/>Address: Kanpur, Uttar Pradesh, India</p>

            </ol>
        </div>
    </>
  )
}

export default Terms