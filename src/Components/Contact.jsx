import React from 'react'

const Contact = () => {
    return (
        <div id="content" className="font-inter animated visible">
            <div className="contact-info flex flex-col justify-around items-center gap-0">
                <div className="address p-12 flex flex-col gap-1">
                    <h2 className="text-2xl font-bold">Restaurant Name: Foodey Gate</h2>
                    <div>
                        <h3 className="contactH3 pt-2 text-xl font-semibold">
                            Address: 1234 Fictitious Lane, Imaginary City, Wonderland, 56789
                        </h3>
                        <p className="text-base">Phone: (555) 123-4567</p>
                        <p className="text-base">Email: info@foodey.com</p>
                        <h3 className="contactH3 pt-2 text-xl font-semibold">Opening Hours:</h3>
                        <p className="text-base">Monday - Friday: 11:00 AM - 11:00 PM</p>
                        <p className="text-base">Saturday: 9:00 AM - 11:00 PM</p>
                        <h3 className="contactH3 pt-2 text-xl font-semibold">Social Media:</h3>
                        <p className="text-base">Facebook: www.facebook.com/foodey</p>
                        <p className="text-base">Instagram: @foodey</p>
                        <p className="text-base">Twitter: @foodey</p>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.3988087931543!2d-16.91475164875452!3d32.648829897723374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc605f019404b28b%3A0x9b239f1a9d06b308!2sIndia%20Gate!5e0!3m2!1sen!2spl!4v1679087440542!5m2!1sen!2spl"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default Contact
