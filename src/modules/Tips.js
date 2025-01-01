import React from "react";
import { Accordion } from "react-bootstrap";

import tipsfoto from '../assets/tips-foto.jpg';
import tipsbride from '../assets/tips-bride.jpg';
import removestart from '../assets/remove-start.jpg';
import remove from '../assets/remove.jpg';
import removeend from '../assets/remove-end.jpg';

import { FormattedMessage } from "react-intl";

function Tips () {
    return(
      <div className="body-section">
      <Accordion className="accordion-flush" defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h2> <FormattedMessage id="tips.remove.header" defaultMessage="The rules of makeup removal." /> </h2></Accordion.Header>
        <Accordion.Body>
          <div className="container">
            <div className="row">
              <div className="row col-12">
                <img src={removestart} alt="remove start" className="tips-img float-start imgshadow" />
                <span className="tips-text">
                  <p> <FormattedMessage id="tips.remove.text1" defaultMessage="Skin care is based on removing makeup: sometimes it is enough to adjust the cleansing process to achieve a noticeable improvement in relief, color, 
                    seboregulation and even the acne situation. But even if there are no problems with regular cleansing, questions arise from time to time. I am sharing detailed instructions on makeup removal." />
                  </p>
                  <p> <FormattedMessage id="tips.remove.text2" defaultMessage="The first and most important thing. Who needs a makeup removal?" /></p>
                  <p> <FormattedMessage id="tips.remove.text3" defaultMessage="Almost everyone. Yes, even for those who do not use decorative cosmetics at all. Check yourself: if you can sign at least one statement from this list, then a demotion is necessary:" /> </p>
                  <ul className="tips-text">
                    <li> <FormattedMessage id="tips.remove.li1_1" defaultMessage="I have oily or combination skin." /> </li>
                    <li> <FormattedMessage id="tips.remove.li1_2" defaultMessage="I leave the house during the day." /> </li>
                    <li> <FormattedMessage id="tips.remove.li1_3" defaultMessage="I sweat a lot." /> </li>
                    <li> <FormattedMessage id="tips.remove.li1_4" defaultMessage="In the morning, I apply facial care." /> </li>
                    <li> <FormattedMessage id="tips.remove.li1_5" defaultMessage="I do makeup regularly." /> </li>
                  </ul>
                  <p> <FormattedMessage id="tips.remove.text4" defaultMessage="It seems that the makeup removal is only about make-up. In fact, its purpose is to remove everything from the skin of the face except the natural one." /> </p>
                  <p> <FormattedMessage id="tips.remove.text5" defaultMessage="Why is this necessary?" /> </p>
                  <ul>
                    <li> <FormattedMessage id="tips.remove.li2_1" defaultMessage="Firstly, everything that we apply to the skin (cream, tone) is guaranteed to oxidize, forming free radicals (the main cause of aging)." /> </li>
                    <li> <FormattedMessage id="tips.remove.li2_2" defaultMessage="Secondly, sebum from the sebaceous glands cannot freely reach the surface of the skin if all the passages are closed (one of the causes of inflammation)." /> </li>
                    <li> <FormattedMessage id="tips.remove.li2_3" defaultMessage="And finally, poorly cleansed skin does not perceive the care products applied on top (one of the reasons for dullness). 
                      It turns out that it is more profitable to wash off cosmetics in any case than not to wash it off. Even if you really want to go to bed as soon as possible." />
                    </li>
                  </ul>
                  <p> <FormattedMessage id="tips.remove.text6" defaultMessage="Cleansing the skin is not only an evening procedure. It is also necessary in the morning, especially if you use active products at night, and wake up the next morning with a shine in the T-zone." /> </p>
                  <p> <FormattedMessage id="tips.remove.text7" defaultMessage="How not to make a demo: 5 common mistakes:" /> </p>
                  <ol className="tips-text">
                    <li>
                      <h4> <FormattedMessage id="tips.remove.subheader1" defaultMessage="1. Soap and other alkaline products." /> </h4>
                      <p> <FormattedMessage id="tips.remove.subheader1.text" defaultMessage="
                        Everything is simple here: the pH of the skin is 5.5, the pH of the soap is 9-10. Alkaline soap shifts the acidity of the skin and opens it to infections, 
                        and it is through the cells of the epidermis that most bacteria and viruses enter the body. At the first stage of the demaking, the pH of the product should not exceed 6. 
                        Even if the number is not indicated on the label, this can be understood by whether the product foams or not (the less foams, the better)." />
                      </p>
                    </li>
                    <li>
                      <h4> <FormattedMessage id="tips.remove.subheader2" defaultMessage="2. Before the creak." /> </h4>
                      <p> <FormattedMessage id="tips.remove.subheader2.text" defaultMessage="
                        A creak is a sure sign that the hydrolipidic mantle of the skin has dissolved along with the impurities. The momentary feeling of cleanliness is quickly replaced by tightness, 
                        irritability of the skin, and subsequently by itching and uncontrolled rashes" />
                      </p>
                    </li>
                    <li>
                      <h4> <FormattedMessage id="tips.remove.subheader3" defaultMessage="3. Napkins." /> </h4>
                      <p> <FormattedMessage id="tips.remove.subheader3.text" defaultMessage="
                        Express methods can only be resorted to as an exception. Wipes are not suitable for regular makeup removal: they only smear dirt, but do not wash them off, contain preservatives, 
                        can injure the skin and are extremely unecological." />
                      </p>
                    </li>
                    <li>
                      <h4> <FormattedMessage id="tips.remove.subheader4" defaultMessage="4. Hot water." /> </h4>
                      <p> <FormattedMessage id="tips.remove.subheader4.text" defaultMessage="
                        Hot water aggressively breaks down fats on the skin and provides shock therapy to capillaries located under the upper layers of the skin. The skin can react to such treatment in any way — 
                        from acne to rosacea." />
                      </p>
                    </li>
                    <li>
                      <h4> <FormattedMessage id="tips.remove.subheader5" defaultMessage="5. Scrub." /> </h4>
                      <p> <FormattedMessage id="tips.remove.subheader5.text" defaultMessage="
                        A scrub is not a means of demaking or even a means of cleansing. This is an exfoliating agent that is applied at a completely different stage and with a different frequency. Scrubs are not suitable for everyday makeup in any form." />
                      </p>
                    </li>
                  </ol>
                </span>
                <img src={remove} alt="remove" className="tips-img float-start imgshadow" />
                <span className="tips-text">
                  <p> <FormattedMessage id="tips.remove.text8" defaultMessage="How can I wash off my makeup?" /> </p>
                  <p> <FormattedMessage id="tips.remove.text9" defaultMessage="
                    One means is not enough. In the morning, strong remedies are not needed, because you only need to remove the remnants of night cosmetics and excess sebum. And in the evening, 
                    there is nowhere without them — dust, sweat, decorative cosmetics are added to sebum and care. For this reason, it would be good to have two products: greasy and foaming." />
                  </p>
                  <p> <FormattedMessage id="tips.remove.text10" defaultMessage="Such a system is called two-stage purification and looks like this:" /> </p>
                  <ul>
                    <li> <FormattedMessage id="tips.remove.li3_1" defaultMessage="after waking up, washing with a foaming agent;" /> </li>
                    <li> <FormattedMessage id="tips.remove.li3_2" defaultMessage="before going to bed — make-up with a greasy remedy and washing with foaming." /> </li>
                  </ul>
                  <p> <FormattedMessage id="tips.remove.text11" defaultMessage="At the first stage, the contamination must be dissolved, at the second — washed off." /> </p>
                  <p> <FormattedMessage id="tips.remove.text12" defaultMessage="If you complete the process at the first stage (for example, just wipe your face with milk or micellar water), the surfactants themselves and all those particles that we tried to remove will remain on the skin. Consequences: inflammation, bumps, uneven skin tone." /> </p>
                </span>
                <img src={removeend} alt="removeend" className="tips-img float-start imgshadow" />
                <span className="tips-text">
                  <p> <FormattedMessage id="tips.remove.text13" defaultMessage="How to find your own pair of funds for makeup removal?" /> </p>
                  <h4> <FormattedMessage id="tips.remove.stage1.header" defaultMessage="Stage 1: means for makeup removal." /> </h4>
                  <p> <FormattedMessage id="tips.remove.stage1.text1" defaultMessage="Format: thick cream, balm, micellar water, milk, oil, hydrophilic oil." /> </p>
                  <p> <FormattedMessage id="tips.remove.stage1.text2" defaultMessage='What it does: according to the principle of "like to like", it collects excess fatty particles from the face (from sebum to decorative cosmetics).' /></p>
                  <p> <FormattedMessage id="tips.remove.stage1.text3" defaultMessage="Application feature: dry hands on dry skin." /> </p>
                  <p> <FormattedMessage id="tips.remove.stage1.text4" defaultMessage="What to pay attention to: soft fatty foods additionally soothe dry and sensitive skin, such products are also good in cold weather, when it literally hurts to touch the skin." /> </p>
                  <h4> <FormattedMessage id="tips.remove.stage2.header" defaultMessage="Stage 2: face cleanser." /> </h4>
                  <p> <FormattedMessage id="tips.remove.stage2.text1" defaultMessage="Format: foam, gel, cream cleanser." /> </p>
                  <p> <FormattedMessage id="tips.remove.stage2.text2" defaultMessage="What does: It washes off the characteristic film left over from the first product and keeps the skin's own lipid barrier intact." /> </p>
                  <p> <FormattedMessage id="tips.remove.stage2.text3" defaultMessage="Application feature: wet hands on wet skin." /> </p>
                  <p> <FormattedMessage id="tips.remove.stage2.text4" defaultMessage="
                    What to pay attention to: a neutral pH (about 6). If it is not specified, you can analyze the composition for the amount of surfactants (words with endings in -ate, -ine, -ide). 
                    It's okay if the ingredients on -ide are found in the middle or at the end of the list — these are soft surfactants of natural origin, for example lauryl glucoside." />
                  </p>
                  <h4> <FormattedMessage id="tips.remove.stage3.header" defaultMessage="Three sites that we sometimes forget about during the makeup removal" /> </h4>
                  <h5> <FormattedMessage id="tips.remove.stage3.subheader1" defaultMessage="Eyebrows." /> </h5>
                  <p> <FormattedMessage id="tips.remove.stage3.text1" defaultMessage="During makeup, many people apply three or four products to their eyebrows in stages, but do not pay attention to this area when cleansing the skin. This is fraught with painful inflammation." /> </p>
                  <h5> <FormattedMessage id="tips.remove.stage3.subheader2" defaultMessage="Lips." /> </h5>
                  <p> <FormattedMessage id="tips.remove.stage3.text2" defaultMessage="Even if it seems that there is no trace of morning lipstick, the pores on the skin around the lips are clogged, and the sebum in them oxidizes and darkens." /> </p>
                  <h5> <FormattedMessage id="tips.remove.stage3.subheader3" defaultMessage="Hair Growth Line." /> </h5>
                  <p> <FormattedMessage id="tips.remove.stage3.text3" defaultMessage="Make-up, like make-up, is most effective to do with collected hair, so as not to miss anything for sure. For example, the root zone, where the tone is usually also applied." /> </p>
                  <h4> <FormattedMessage id="tips.remove.stage4.header" defaultMessage="How to wash off makeup if I have…" /> </h4>
                  <h5> <FormattedMessage id="tips.remove.stage4.subheader1" defaultMessage="...contact lenses" /></h5>
                  <p> <FormattedMessage id="tips.remove.stage4.text1" defaultMessage="The ideal option is to remove the lenses and perform a two—stage cleansing. If this is not possible, the product for makeup removal (balm, milk, oil) instead of the skin, you will have to apply it on a cotton pad so that the application can be controlled." /> </p>
                  <h5> <FormattedMessage id="tips.remove.stage4.subheader2" defaultMessage="...extended eyelashes" /> </h5>
                  <p> <FormattedMessage id="tips.remove.stage4.text2" defaultMessage="Greasy products dissolve the glue on which the eyelashes are held, so such products are not suitable for eye makeup. The way out is either extremely careful application with a strong indentation from the area around the eyes, or micellar water." /> </p>
                  <h5> <FormattedMessage id="tips.remove.stage4.subheader3" defaultMessage="...acne in the active phase" /> </h5>
                  <p> <FormattedMessage id="tips.remove.stage4.text3" defaultMessage="Open inflammations cannot be rubbed with a disc, so everything soft, greasy, thick and creamy that needs to be applied directly to the skin will work as well as possible: from hydrophilic oil to thick balm." /> </p>
                  <p> <FormattedMessage id="tips.remove.stage4.text4" defaultMessage="And a few more questions" /> </p>
                  <h4> <FormattedMessage id="tips.remove.stage5.header" defaultMessage="Is it possible to wash off cosmetics from the face and eyes with the same product?" /> </h4>
                  <p> <FormattedMessage id="tips.remove.stage5.text1" defaultMessage="Of course, if it's comfortable. They do produce separate products for the eyes, but they are needed only for those who are not satisfied with the result of makeup removal a universal product (for example, it does not wash off mascara well or leaves a greasy film)." /> </p>
                  <p> <FormattedMessage id="tips.remove.stage5.text2" defaultMessage="It seems to me that my remedy does not work well — it does not wash off anything the first time." /> </p>
                  <p> <FormattedMessage id="tips.remove.stage5.text3" defaultMessage="It happens that way. For some reason, many people think that if the tool did not work in 5 seconds, then it does not work at all. In fact, most products need at least 20 seconds to break the bonds between the molecules. And if we are talking about waterproof cosmetics or a lot of makeup, then two or three washes in a row may be required." /> </p>
                  <h4> <FormattedMessage id="tips.remove.stage6.header" defaultMessage="Do you have to wash your face at all? They say the anhydrous method is better for the skin." /> </h4>
                  <p> <FormattedMessage id="tips.remove.stage6.text1" defaultMessage="
                    This has not been proven. Manufacturers of micellar water, which supposedly does not need to be flushed, tried to teach us to the anhydrous method. It turned out that it was necessary: in most formulas, surfactants are in the first place, and they cannot be left on the skin. 
                    Completely anhydrous washing methods have not yet been invented, but you can remove the products for the first and second stages not with water, but, for example, with a damp terry or muslin towel. The method is good for everyone except owners of acne in the inflammatory stage." />
                  </p>
                  <h4> <FormattedMessage id="tips.remove.stage7.header" defaultMessage="Well, do I need to pick up a wash with special effects? For example, with acids or retinol." /> </h4>
                  <p> <FormattedMessage id="tips.remove.stage7.text1" defaultMessage="Globally, this makes no sense. Means for cleansing and cleansing are on the skin for such a short time that they cannot bring any moisturizing, regenerating, and even more so anti-aging effect. The best thing such a product can do is to keep the skin neutral pH, so the low pH label is probably the only one worthy of attention." /> </p>
                </span>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h2> <FormattedMessage id="tips.photos.header" defaultMessage="What to pay attention to before taking photos and videos?" /> </h2></Accordion.Header>
        <Accordion.Body>
        <div className="container">
            <div className="row">
              <div className="row col-12">
                <img src={tipsfoto} alt="before foto" className="tips-img float-start imgshadow" />
                <ul className="tips-text">
                  <li>
                    <h4> <FormattedMessage id="tips.photos.subheader1" defaultMessage="1. Do I need a makeup artist service?" /> </h4>
                    <p> <FormattedMessage id="tips.photos.subheader1.text1" defaultMessage="
                      Teamwork determines the result. The makeup artist will help to even out the skin tone, hide circles under the eyes, 
                      and sculpt the oval of the face. Theoretically, this can be done later in a graphic editor. However, 
                      the uniqueness of a good photo lies in the minimal post-processing of the received frames. 
                      Make-up artists use professional tools that will not add glare, will not distort colors 
                      and will not flow under the light of lamps." />
                    </p>
                    <p> <FormattedMessage id="tips.photos.subheader1.text2" defaultMessage="It is advisable for men not to get a haircut on the day of shooting." /></p>
                    <p> <FormattedMessage id="tips.photos.subheader1.text3" defaultMessage="
                      A slight unshaven appearance can add masculinity and looks much more attractive than red spots from a recent shave. 
                      A prerequisite is clean hair and fresh styling. Don't forget to put your hands in order. For men, 
                      neatly filed nails and the absence of burrs are no less important than for women." />
                    </p>
                    <p> <FormattedMessage id="tips.photos.subheader1.text4" defaultMessage="
                      In no case is it recommended to abuse alcohol on the eve of a visit to a photo studio." />
                    </p>
                  </li>
                  <li>
                    <h4> <FormattedMessage id="tips.photos.subheader2" defaultMessage="2. What can be improved with retouching?" /> </h4>
                    <p> <FormattedMessage id="tips.photos.subheader2.text1" defaultMessage="
                      Modern photography consists of two stages: shooting and post-processing. Post-processing includes: retouching, 
                      color correction and geometry editing. The detail and texture of the source file should not scare you: 
                      after post-processing, it will make an excellent glossy frame." />
                    </p>
                  </li>
                  <li>
                    <h4> <FormattedMessage id="tips.photos.subheader3" defaultMessage="3. Which clothes should be preferred when creating a business portrait?" /> </h4>
                    <p> <FormattedMessage id="tips.photos.subheader3.text1" defaultMessage="Choose a classic suit if you adhere to a conservative style or casual — to create a modern dynamic image." /> </p>
                    <p> <FormattedMessage id="tips.photos.subheader3.text2" defaultMessage="It is better to bring clothes with you — on the way to the studio or office, things may get wrinkled or dirty." /></p>
                    <p> <FormattedMessage id="tips.photos.subheader3.text3" defaultMessage="Don't forget the accessories — tie, cufflinks, watch. It is better to choose jewelry that is not too large and inconspicuous." /></p>
                    <p> <FormattedMessage id="tips.photos.subheader3.text4" defaultMessage="
                      The shoes must be in perfect condition. But do not forget about the convenience. 
                      It is difficult to assume a free natural pose if the shoes are tight. It is better for women not to wear too high heels. 
                      It is advisable to carry new shoes in advance." />
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><h2> <FormattedMessage id="tips.bride.header" defaultMessage="Tips for brides." /></h2></Accordion.Header>
        <Accordion.Body>
        <div className="container">
            <div className="row">
              <div className="row col-12">
                <img src={tipsbride} alt="for bride" className="tips-img float-start imgshadow" />
                <ul className="tips-text">
                  <li>
                    <h4> <FormattedMessage id="tips.bride.subheader1" defaultMessage="1. Should I have a rehearsal or not?" /> </h4>
                    <p> <FormattedMessage id="tips.bride.subheader1.text" defaultMessage="
                      The choice is yours. If you want to see how you will look on your wedding day, 
                      all this needs to be done in the same full volume as for the celebration itself. 
                      Many brides do a trial makeup to make a final decision, as well as just get used to a new look." /> 
                    </p>
                  </li>
                  <li>
                    <h4> <FormattedMessage id="tips.bride.subheader2" defaultMessage="2. Eyebrow correction" /></h4>
                    <p> <FormattedMessage id="tips.bride.subheader2.text" defaultMessage="
                      Eyebrow correction is best done two to three days before the wedding. Before that, 
                      try not to pluck your eyebrows yourself — trust a professional. 
                      Eyebrows should be modeled correctly to make the facial features more harmonious and complement the image." /> 
                    </p>
                  </li>
                  <li>
                    <h4> <FormattedMessage id="tips.bride.subheader3" defaultMessage="3. Go to a cosmetologist if necessary." /></h4>
                    <p> <FormattedMessage id="tips.bride.subheader3.text" defaultMessage="
                      Go to a cosmetologist if necessary. Do it in advance, 1.5-2 weeks before the wedding or a month before. 
                      After skin moisturizing procedures, the makeup will look much better." />
                    </p>
                  </li>
                  <li>
                    <h4> <FormattedMessage id="tips.bride.subheader4" defaultMessage="4. Do not abuse the solarium." /></h4>
                    <p> <FormattedMessage id="tips.bride.subheader4.text" defaultMessage="
                      A light golden tan looks beautiful, but too dark skin is rather ridiculous. 
                      You can start visiting the solarium a month in advance and it is better to stop at least a week before the wedding so that the redness goes away. 
                      I would advise you to forget about self-tanning at all: you definitely don't need divorces and orange skin color on your wedding day. " />
                    </p>
                  </li>
                  <li>
                    <h4> <FormattedMessage id="tips.bride.subheader5" defaultMessage="5. I advise you to buy:" /></h4>
                    <ul>
                      <li> <FormattedMessage id="tips.bride.subheader5.text1" defaultMessage="matting wipes to periodically refresh your face and the groom's on the wedding day (so that the skin does not shine in the photo);" /></li>
                      <li> <FormattedMessage id="tips.bride.subheader5.text2" defaultMessage="beautiful transparent or colored lip gloss to fix your makeup during the day;" /></li>
                      <li> <FormattedMessage id="tips.bride.subheader5.text3" defaultMessage="loose powder and a brush." /></li>
                    </ul> 
                    <p> <FormattedMessage id="tips.bride.subheader5.text4" defaultMessage="" /></p> 
                  </li>
                  <li>
                    <h4> <FormattedMessage id="tips.bride.subheader6" defaultMessage="6. No experiments." /> </h4>
                    <p> <FormattedMessage id="tips.bride.subheader6.text" defaultMessage="Do not experiment with exotic remedies on the eve of the wedding, to minimize stress to your skin. Also, try not to drink too much liquid and do not eat spicy and fatty foods." /></p>
                  </li>
                  <li>
                    <h4> <FormattedMessage id="tips.bride.subheader7" defaultMessage="7. Get enough sleep!" /> </h4>
                    <p> <FormattedMessage id="tips.bride.subheader7.text" defaultMessage="
                      It probably sounds strange, but often the last preparations are delayed until late at night, and pre-wedding experiences do not allow you to sleep, and you need to get up very early. 
                      Hence the bruises under the eyes, fatigue, but there is a very long and emotional day ahead. Therefore, think about and prepare everything in advance, 
                      do not leave anything at the last moment so that you have time for a sound healthy sleep." />
                    </p>
                  </li>
                  <li>
                    <h4> <FormattedMessage id="tips.bride.subheader8" defaultMessage="8. Be sure to wash your hair at night and dry it." /> </h4>
                    <p> <FormattedMessage id="tips.bride.subheader8.text" defaultMessage="It is better not to apply oils to damp hair. The hairstyle lasts much longer on dry hair." /></p>
                  </li>
                  <li>
                    <h4> <FormattedMessage id="tips.bride.subheader9" defaultMessage="9. Calm atmosphere." /> </h4>
                    <p> <FormattedMessage id="tips.bride.subheader9.text" defaultMessage="It is desirable that the bride's preparation takes place in a calm atmosphere, so try to make sure that only you, the makeup artist or the stylist are in the room 
                      (the exception is the photographer). Don't let anyone distract you, including the phone. The bride does the makeup together with the master (looks where she needs to, etc.)." /> 
                    </p>
                  </li>
                </ul>
                <p> <FormattedMessage id="tips.bride.text" defaultMessage="Use these tips to be and feel irresistible on your wedding day. May this day be remembered as one of the happiest!" /></p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    );
}

export default Tips;