import Accordion from 'react-bootstrap/Accordion';

function ProductAccordion({ description }) {
    return (
        <Accordion id="product-accordion" style={{ display: 'none' }}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Body>
                    {description}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Shipping</Accordion.Header>
                <Accordion.Body>
                    <p className="mt-4">When you place your order, we know that you want to receive the item as fast as possible. We will make that happen.</p>
                    <p>How long will the entire ordering process take from order submission to delivery?</p>
                    <p>We will do our best to deliver your product as fast as possible, depending on your location.</p>
                    <p className="display-6">USA only:</p>
                    <ul>
                        <li>Standard Shipping: 5-10 Business Days via USPS (expect a slight delay due to COVID)</li>
                        <li>Express Shipping: 3-5 Business Days via FedEx </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Return</Accordion.Header>
                <Accordion.Body>
                    <p className="mt-4">We have a pretty straightforward and simple return, refund, and exchange policy.</p>
                    <p>When you receive your order and want to exchange it with a different product, it MUST be unopened, unused, in original packaging, and with all the labels. First, you will need to contact us stating your reason for exchange. Then, you will need to ship the original order back to us, at your own expense. Once we receive it, we will inspect if it's unopened, unused, in original packaging, and with all the labels. Then, we will issue a store
                        credit in the form of a code, and you will use that code to make a new purchase.</p>
                    <p>When you receive your order and have changed your mind and you want to return it, it MUST be unopened, unused, in original packaging, and with all the labels. First, you will need to contact us stating your reason for returning the item/s. Then, you will need to ship the original order back to us, at your own expense. Once we receive it, we will inspect if it's unopened, unused, in original packaging, and with all the labels. Then, we will issue a store credit only in the form of a code, not a full refund.</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

ProductAccordion.defaultProps = {
    description: ""
};

export default ProductAccordion;