import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className="faq container">
            <h2 className="text-center h1 my-5">Frequently Asked Questions</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What shipping options are available?</Accordion.Header>
                    <Accordion.Body>
                        <p>We offer the following shipping options:</p>
                        <ul>
                            <li>Standard Shipping: 5-10 business days via USPS depending on your location.</li>
                            <li>Express Shipping: 2-4 business days via FedEx depending on your location.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How can I track my order?</Accordion.Header>
                    <Accordion.Body>
                        <p>A shipping notification with tracking number will be sent via email after your order has been shipped out. You may click on that tracking number to get the latest available update. You can also visit the website and click on Track Order tab on the header and footer sections.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Do you ship internationally?</Accordion.Header>
                    <Accordion.Body>
                        <p>Yes, we do ship worldwide.  Shipping costs will depend on your location unless otherwise stated as free shipping.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default FAQ