const confirmationPath = location.pathname.replace(/\/+$/, '/');
if (confirmationPath === '/thank-you/' || confirmationPath === '/confirmed/') {
  document.title = 'Thank you for your enquiry | AboveForm';
  document.getElementById('app').innerHTML = `
    <section class="inner-hero dark confirmation-hero">
      <div>
        <p class="overline">ENQUIRY RECEIVED</p>
        <h1 class="section-heading">Thank you for<br><em>sharing your vision.</em></h1>
        <p class="lead">Your AboveForm journey has begun.</p>
      </div>
    </section>
    <section class="confirmation-section">
      <div class="confirmation-content">
        <p class="overline">A THOUGHTFUL NEXT STEP</p>
        <h2>We've received<br><em>your project details.</em></h2>
        <p>Thank you for telling us about your home and what you hope to create. We'll review the information you've shared and consider whether a suitable specialist introduction is available.</p>
        <p>If there is a potential match, we'll share the relevant details with the selected specialist so they can discuss your project with you. We'll let you know who has received your enquiry. There is no obligation to proceed with any quotation or work.</p>
        <div class="confirmation-actions">
          <a class="button" href="/">RETURN TO THE HOMEPAGE</a>
          <a class="text-link" href="/possibilities/">EXPLORE THE POSSIBILITIES</a>
        </div>
        <p class="note">An enquiry does not guarantee an introduction, project feasibility or a quotation.</p>
      </div>
      <div class="confirmation-art" aria-hidden="true">
        <span class="confirmation-light"></span>
        <span class="confirmation-roof one"></span>
        <span class="confirmation-roof two"></span>
      </div>
    </section>`;
}

if (confirmationPath === '/exploring/') {
  document.title = 'Thanks for exploring | AboveForm';
  document.getElementById('app').innerHTML = `
    <section class="inner-hero dark confirmation-hero">
      <div>
        <p class="overline">THANKS FOR EXPLORING</p>
        <h1 class="section-heading">Every great space<br><em>begins with an idea.</em></h1>
        <p class="lead">There is no rush to decide what comes next.</p>
      </div>
    </section>
    <section class="confirmation-section">
      <div class="confirmation-content">
        <p class="overline">YOUR HOME, YOUR PACE</p>
        <h2>Keep imagining<br><em>what's possible.</em></h2>
        <p>Thank you for exploring your loft conversion options with AboveForm. Whether you're considering an extra bedroom, a peaceful workspace or simply more natural light, taking time to understand the possibilities is a good place to start.</p>
        <p>There's no obligation to take the next step today. When you're ready to discuss a potential specialist introduction, you can return and tell us more about your project.</p>
        <div class="confirmation-actions">
          <a class="button" href="/possibilities/">EXPLORE LOFT POSSIBILITIES</a>
          <a class="text-link" href="/">RETURN TO THE HOMEPAGE</a>
        </div>
        <p class="note">Illustrative imagery and general information are provided for inspiration. A qualified professional should assess your home's suitability.</p>
      </div>
      <div class="confirmation-art" aria-hidden="true">
        <span class="confirmation-light"></span>
        <span class="confirmation-roof one"></span>
        <span class="confirmation-roof two"></span>
      </div>
    </section>`;
}
