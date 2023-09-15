import Accordion from 'react-bootstrap/Accordion';

function ProductAccordion() {
    return (
        <Accordion id="product-accordion" style={{ display: 'none' }}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Body>
                    <p className="mt-4">
                        Introducing the exquisite Aeliana Luxury Bag – a true embodiment of elegance and sophistication. Crafted with the utmost precision and attention to detail, this masterpiece redefines luxury in every sense.</p>

                    <p>Enveloped in the gentle embrace of a soothing baby blue hue, the Aeliana Luxury Bag exudes an aura of timeless charm and refined beauty. The color evokes a sense of tranquility and grace, making it the perfect companion for any occasion, whether it be a casual outing or a glamorous soirée.</p>

                    <p>Indulge in the opulence of genuine leather as your fingertips graze across the impeccably smooth surface of the Aeliana bag. This carefully selected leather not only enhances the bag's durability but also lends an air of exclusivity, ensuring that your accessory stands the test of time while becoming a symbol of yourimpeccable taste.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Shipping</Accordion.Header>
                <Accordion.Body>
                    <p class="mt-4">When you place your order, we know that you want to receive the item as fast as possible. We will make that happen.</p>
                    <p>How long will the entire ordering process take from order submission to delivery?</p>
                    <p>We will do our best to deliver your product as fast as possible, depending on your location.</p>
                    <p class="display-6">USA only:</p>
                    <ul>
                        <li>Standard Shipping: 5-10 Business Days via USPS (expect a slight delay due to COVID)</li>
                        <li>Express Shipping: 3-5 Business Days via FedEx </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Return</Accordion.Header>
                <Accordion.Body>
                    <p class="mt-4">We have a pretty straightforward and simple return, refund, and exchange policy.</p>
                    <p>When you receive your order and want to exchange it with a different product, it MUST be unopened, unused, in original packaging, and with all the labels. First, you will need to contact us stating your reason for exchange. Then, you will need to ship the original order back to us, at your own expense. Once we receive it, we will inspect if it's unopened, unused, in original packaging, and with all the labels. Then, we will issue a store
                        credit in the form of a code, and you will use that code to make a new purchase.</p>
                    <p>When you receive your order and have changed your mind and you want to return it, it MUST be unopened, unused, in original packaging, and with all the labels. First, you will need to contact us stating your reason for returning the item/s. Then, you will need to ship the original order back to us, at your own expense. Once we receive it, we will inspect if it's unopened, unused, in original packaging, and with all the labels. Then, we will issue a store credit only in the form of a code, not a full refund.</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default ProductAccordion;