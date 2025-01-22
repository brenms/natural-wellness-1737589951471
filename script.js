// Generate affiliate links
function getAffiliateLink(offer) {
    if (!AFFILIATE_IDS.clickbank || !offer.vendor_id) return '#';
    return `https://hop.clickbank.net/?affiliate=${AFFILIATE_IDS.clickbank}&vendor=${offer.vendor_id}`;
}

// Create offer cards
function createOfferCard(offer) {
    return `
        <div class="offer-card">
            <div class="offer-image-container">
                <img src="${offer.image_url}" alt="${offer.optimizedTitle}" class="offer-image" loading="lazy">
            </div>
            <div class="offer-content">
                <h2 class="offer-title">${offer.optimizedTitle}</h2>
                <p class="offer-description">${offer.optimizedDescription}</p>
                <ul class="features-list">
                    ${offer.features.map(feature => `
                        <li class="feature-item">${feature}</li>
                    `).join('')}
                </ul>
                <div class="price">$${offer.price}</div>
                <p class="price-note">One-time purchase • Free shipping</p>
                <a href="${getAffiliateLink(offer)}" class="cta-button" target="_blank" rel="noopener">
                    ${offer.ctaText}
                </a>
            </div>
        </div>
    `;
}

// Initialize the page
function init() {
    // Render offers
    const offersContainer = document.getElementById('offers');
    offersContainer.innerHTML = OFFERS.map(createOfferCard).join('');
    
    // Update footer year
    document.getElementById('year').textContent = new Date().getFullYear();
}

// Start the app
document.addEventListener('DOMContentLoaded', init);