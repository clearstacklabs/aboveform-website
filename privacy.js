if (location.pathname.replace(/\/+$/, '/') === '/privacy/') {
  document.title = 'Privacy notice | AboveForm';
  document.getElementById('app').innerHTML = `
    <section class="inner-hero dark privacy-hero">
      <div>
        <p class="overline">YOUR INFORMATION, TREATED WITH CARE</p>
        <h1 class="section-heading">Privacy, made<br><em>clear.</em></h1>
        <p class="lead">How we handle the details you share with AboveForm.</p>
      </div>
    </section>
    <section class="privacy-section">
      <div class="privacy-sidebar">
        <p class="overline">ABOVEFORM</p>
        <h2>Trust begins<br><em>with clarity.</em></h2>
        <p>This notice explains how we use personal information when you explore a loft conversion or request a specialist introduction.</p>
        <p class="privacy-draft">Private launch draft. Legal operator details, supplier transfers and retention arrangements must be verified before public release.</p>
      </div>
      <article class="privacy-content">
        <section><h2>Who we are</h2><p>AboveForm is an independent service helping homeowners explore loft conversion projects and, where available, connect with a potentially suitable specialist. We are not a building contractor, architect or surveyor.</p><p>AboveForm is a trading name operated by Samuel Osei as a sole trader. <strong>A suitable address for legal correspondence and other outstanding privacy disclosures must be confirmed before public launch.</strong></p><p>For privacy enquiries, contact <a href="mailto:hello@aboveform.co.uk">hello@aboveform.co.uk</a>.</p></section>
        <section><h2>Information we collect</h2><p>Depending on your enquiry, we may collect your name, email address, telephone number, postcode, property type, intended loft conversion, approximate budget, timeframe, planning status, contact preference and other project information you choose to provide. We may also receive basic referral or campaign information, such as the source of your visit.</p><p>Please avoid sending financial documents or other sensitive information unless we have specifically requested it through an appropriate secure process.</p></section>
        <section><h2>How we use your information</h2><p>We use your details to understand your plans, review the enquiry, respond to you and, if you ask for a specialist match, identify and arrange a potential introduction. We may also use limited records to administer the service, maintain security and understand how enquiries reach us.</p><p>We do not treat a project enquiry as permission to send unrelated promotional emails or texts.</p></section>
        <section><h2>Specialist introductions</h2><p>If you choose to request a specialist match, you are asking AboveForm to consider a suitable introduction. Where an appropriate specialist is available, we may share the relevant contact and project details you provided with that selected specialist so they can discuss your enquiry using your preferred contact method.</p><p><strong>We will let you know which specialist has received your enquiry when the introduction is arranged.</strong> We do not require you to approve the introduction a second time, but you can contact us if your circumstances change or you no longer wish us to proceed.</p><p>We do not share your details with unrelated contractors for general marketing. An introduction is not a guarantee of suitability, workmanship, availability or a quotation.</p></section>
        <section><h2>Our lawful basis</h2><p>We must identify a lawful basis under UK data protection law for each use of personal information, including handling requests for introductions and necessary service administration. The precise lawful bases and any legitimate-interest assessment will be confirmed before public launch. We will not rely on this draft as a final legal notice.</p></section>
        <section><h2>Service providers</h2><p>We use providers to operate the enquiry process, including Tally for form collection and an email service for receiving and handling messages. Hosting and related service providers may also process limited data on our behalf. We will verify the relevant suppliers, processing locations and any international-transfer safeguards before launch.</p></section>
        <section><h2>How long we keep information</h2><p>Our proposed policy is to retain enquiry records for up to 12 months after your last interaction, unless we need to keep particular records longer for a legitimate legal or dispute-related reason. We will confirm that our form and email retention procedures support this policy before public launch.</p></section>
        <section><h2>Your rights</h2><p>Depending on the circumstances, you may be able to ask for access to, correction or deletion of your personal information, or request restrictions on its use. You may also have rights to object, obtain a portable copy or withdraw consent where consent is the basis used.</p><p>Contact <a href="mailto:hello@aboveform.co.uk">hello@aboveform.co.uk</a> with a privacy request. You also have the right to complain to the <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">Information Commissioner's Office</a>.</p></section>
      </article>
    </section>`;
}
