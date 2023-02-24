import imgFeature1 from "../../assets/img/icon-chat.png";
import imgFeature2 from "../../assets/img/icon-money.png";
import imgFeature3 from "../../assets/img/icon-security.png";

import { Feature } from "../feature/Feature";

export const Features = () => {
    return (
        <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
            imgSrc={imgFeature1}
            imgAlt={"Chat Icon"}
            title={"You are our #1 priority"}
            content={
            "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            }
        />
        <Feature
            imgSrc={imgFeature2}
            imgAlt={"Money Icon"}
            title={"More savings means higher rates"}
            content={
            "The more you save with us, the higher your interest rate will be!"
            }
        />
        <Feature
            imgSrc={imgFeature3}
            imgAlt={"Security Icon"}
            title={"Security you can trust"}
            content={
            "We use top of the line encryption to make sure your data and money is always safe."
            }
        />
        </section>
    );
};