import React from 'react'

const Faq =() => {
  return (
    <section class="faq-section">
<div class="container">
  <div class="row">
                    <div class="col-md-6 offset-md-3">

                        <div class="faq-title text-center pb-3">
                            <h2>FAQ</h2>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <div class="faq" id="accordion">
                            <div class="card">
                                <div class="card-header" id="faqHeading-1">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                                            <span class="badge">1</span> Qui sommes nous ?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-1" class="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
                                    <div class="card-body">
                                        <p> Spécialiste de la vente de montres sur internet et revendeur officiel des grandes marques horlogères. 
                                          Nous sommes l’un des acteurs principaux du marché des montres sur internet depuis plusieurs années.
                                          Notre site vous propose un large choix de montres homme, montres femme et montres enfant issues des plus grandes marques : Swatch, Calvin Klein, Tissot, Festina, Guess, Ice-Watch, Fossil, Diesel et beaucoup d’autres encore. Montres and Co est revendeur agréé pour chacune des marques présente sur le site. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="faqHeading-2">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-2" data-aria-expanded="false" data-aria-controls="faqCollapse-2">
                                            <span class="badge">2</span>  Je souhaite acheter ma montre en boutique.
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-2" class="collapse" aria-labelledby="faqHeading-2" data-parent="#accordion">
                                    <div class="card-body">
                                        <p>Vous préférez vous déplacer en boutique pour réaliser votre achat ? 
                                          Nous serons ravis de vous accueillir pour vous conseiller sur nos différentes collections. 
                                          Afin de garantir la sécurité de chacun dans le contexte sanitaire actuel, les gestes barrières suivants sont appliqués dans toutes nos boutiques :
                                          Port du masque obligatoire, Gel hydroalcoolique disponible à l'entrée du magasin, Respect d’une distance minimum d’1 mètre entre chaque personne, 
                                          Caisses et terminaux de paiement régulièrement désinfectés.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="faqHeading-3">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-3" data-aria-expanded="false" data-aria-controls="faqCollapse-3">
                                            <span class="badge">3</span>  Quels sont les modes de paiement proposés ?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-3" class="collapse" aria-labelledby="faqHeading-3" data-parent="#accordion">
                                    <div class="card-body">
                                        <p>Afin de répondre à tous vos besoins, nous vous proposons plusieurs modes de règlement : chèque-cadeau de notre site pour régler la totalité de votre commande ou simplement une partie ; 
                                          carte bancaire, via notre solution bancaire en ligne sécurisée ; Cartes bancaires acceptées : CB Mastercard, Visa, Amex, Le paiement en ligne reste le meilleur moyen pour un traitement rapide et sûr de votre commande</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="faqHeading-4">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-4" data-aria-expanded="false" data-aria-controls="faqCollapse-4">
                                            <span class="badge">4</span> Quand ma commande sera-t-elle expédiée ?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-4" class="collapse" aria-labelledby="faqHeading-4" data-parent="#accordion">
                                    <div class="card-body">
                                        <p>Toute commande passée avant midi en semaine (du lundi au vendredi inclus) sera préparée et expédiée le jour-même. 
                                          Si votre commande a été passée le week-end ou après 12 h, elle sera traitée le premier jour ouvré suivant.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="faqHeading-5">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-5" data-aria-expanded="false" data-aria-controls="faqCollapse-5">
                                            <span class="badge">5</span>Quand ma commande sera-t-elle livrée ?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-5" class="collapse" aria-labelledby="faqHeading-5" data-parent="#accordion">
                                    <div class="card-body">
                                        <p>Les délais de livraison diffèrent en fonction du mode de livraison choisi. 
                                          Consultez notre rubrique Livraison pour davantage d'informations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="faqHeading-6">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-6" data-aria-expanded="false" data-aria-controls="faqCollapse-6">
                                            <span class="badge">6</span>  Pourquoi ma commande est-elle toujours en préparation ?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-6" class="collapse" aria-labelledby="faqHeading-6" data-parent="#accordion">
                                    <div class="card-body">
                                        <p>Nos produits sont stockés dans plusieurs entrepôts. 
                                          Il arrive donc qu'un délai supplémentaire soit nécessaire à la préparation de votre commande. 
                                          Nous mettons tout en oeuvre pour que votre commande soit livrée le plus rapidement possible.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="faqHeading-7">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-7" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                            <span class="badge">7</span> Quel est le délai pour retourner une commande ?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-7" class="collapse" aria-labelledby="faqHeading-7" data-parent="#accordion">
                                    <div class="card-body">
                                        <p>La loi impose un délai de rétractation de 14 jours francs, à compter de la date de réception des articles.Nous étendons ce délai à 30 jours. 30 jours pour que vous puissiez essayer tranquillement vos articles et nous les retourner si ceux-ci ne vous conviennent pas. 
                                          Les frais de retour sont pris en charge depuis la France Métropolitaine en utilisant l'option de retour proposée par La Poste, dans la limite d'un retour par commande. 
                                          Si vous le souhaitez, vous pouvez retourner votre commande par le transporteur de votre choix, à vos frais.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                </section>
  );
};

export default Faq