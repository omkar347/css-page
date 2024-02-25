import './App.css';

function App() {
  return (
    <div className="App">
      <aside className='flex-column'>
        <header>
          <div className='nav-logo'>
            <img src='/img/nav-logo.png' alt='logo' />
          </div>
        </header>
        <nav className='nav-wrapper'>
          <section id="widget_1">
            <div className="even-columns" style={{ '--gap': '4px', '--data-grid-template-columns': '16px auto 16px' }}>
              <span className='nav-pre-icon' style={{ background: 'url(/img/doc.png) no-repeat 0' }}></span>
              <span className='nav-text'>My template</span>
              <span className='nav-post-icon' ></span>
            </div>
          </section>
          <section id="widget_2">
            <div className="even-columns" style={{ '--gap': '4px', '--data-grid-template-columns': '16px auto 16px' }}>
              <span className='nav-pre-icon' style={{ background: 'url(/img/search.png) no-repeat 0' }}></span>
              <span className='nav-text'>Search</span>
              <span className='nav-post-icon'></span>
            </div>
            <ul>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/star.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Software Engineer</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/star.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Computer hardware engineer</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/star.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Network Engineer</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/star.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Technical Support</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/star.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Personal Information</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/star.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Network administrator</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/star.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Management</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/star.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Data analysis</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/star.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Computer technician</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/clock.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Past clock 1</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/clock.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Past clock 2</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/clock.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Computers and information...</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/clock.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Database Administrator</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/clock.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Computer security</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/clock.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Computer Systems Analyst</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
            </ul>
          </section>
          <section id="widget_3">

            <div className="even-columns" style={{ '--gap': '4px', '--data-grid-template-columns': '16px auto 16px' }}>
              <span className='nav-pre-icon' style={{ background: 'url(/img/board.png) no-repeat 0' }}></span>
              <span className='nav-text'>My boards</span>
              <span className='nav-post-icon' style={{ background: 'url(/img/union.png) no-repeat 0' }}></span>
            </div>
            <ul>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/folder.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Board 1</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/folder.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Board 2</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/folder.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Board 3</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>

              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/lock.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Software Engineer</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/lock.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Software Engineer</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>
              <li>
                <div className="even-columns" style={{ '--gap': '6px', '--data-grid-template-columns': '16px auto 16px' }}>
                  <span className='nav-pre-icon' style={{ background: 'url(/img/lock.png) no-repeat 0' }}></span>
                  <span className='nav-text'>Software Engineer</span>
                  <span className='nav-post-icon'></span>
                </div>
              </li>

            </ul>
          </section>
        </nav>
        <footer>
          <div className='ft-contaiiner'>
            <div className='nav-logo'>
              <img src='/img/img.png' alt='profile pic' />
              <div className='terms-checkbox-text'>
                Carla
              </div>
            </div>
            <div className='st-logo'>
              <img src='/img/settings.png' alt='settings' />
            </div>
          </div>
        </footer>
      </aside>
      <main className='wrapper'>
        <section >
          <div className='flex-column container pm-container' style={{ '--gap': '16px' }}>
            <div className='even-columns'>
              <div className='pm-logo'>
                <img src='/img/pm-logo.png' alt='pm-logo' />
              </div>
              <div className='pm-description'>
                <div className='pm-description-title'>
                  Premium Account
                </div>
                <div className='pm-description-body'>
                  You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section >
          <div className='flex-column container' style={{ '--gap': '1rem' }}>
            <div className='even-columns'>
              <div className='form-title'>
                Personal Information
              </div>
            </div>
            <div className='even-columns'>

              <div className='form-inputs flex-column'>
                <div className='even-columns' style={{ '--gap': '1.5rem', '--data-grid-template-columns': '50%' }}>
                  <div className='form-control'>
                    <label className="form-label">First Name</label>
                    <div className="form-input">
                      <input aria-invalid="false" type="text" />
                      <fieldset aria-hidden="true" className="form-outline">
                        <legend className="css-14lo706">
                          <span>First Name</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                  <div className='form-control'>
                    <label className="form-label">Last Name</label>
                    <div className="form-input">
                      <input aria-invalid="false" type="text" />
                      <fieldset aria-hidden="true" className="form-outline">
                        <legend className="css-14lo706">
                          <span>Last Name</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className='even-columns' style={{ '--gap': '1.5rem', '--data-grid-template-columns': '50%' }}>
                  <div className='form-control'>
                    <label className="form-label">City</label>
                    <div className="form-input">
                      <input aria-invalid="false" type="text" />
                      <fieldset aria-hidden="true" className="form-outline">
                        <legend className="css-14lo706">
                          <span>City</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                  <div className='form-control'>
                    <label className="form-label">Postal Code</label>
                    <div className="form-input">
                      <input aria-invalid="false" type="text" />
                      <fieldset aria-hidden="true" className="form-outline">
                        <legend className="css-14lo706">
                          <span>Postal Code</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className='even-columns' style={{ '--gap': '1.5rem', '--data-grid-template-columns': '100%' }}>
                  <div className='form-control'>
                    <label className="form-label">Address</label>
                    <div className="form-input">
                      <input aria-invalid="false" type="text" />
                      <fieldset aria-hidden="true" className="form-outline">
                        <legend className="css-14lo706">
                          <span>Address</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className='even-columns' style={{ '--gap': '1.5rem', '--data-grid-template-columns': '50%' }}>
                  <div className='form-control'>
                    <label className="form-label">Email</label>
                    <div className="form-input">
                      <input aria-invalid="false" type="email" />
                      <fieldset aria-hidden="true" className="form-outline">
                        <legend className="css-14lo706">
                          <span>Email</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                  <div className='form-control'>
                    <label className="form-label">Phone</label>
                    <div className="form-input">
                      <input aria-invalid="false" type="text" />
                      <fieldset aria-hidden="true" className="form-outline">
                        <legend className="css-14lo706">
                          <span>Phone</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className='even-columns' style={{ '--gap': '1.5rem', '--data-grid-template-columns': '50%' }}>
                  <div className='form-control'>
                    <label className="form-label">Password</label>
                    <div className="form-input">
                      <input aria-invalid="false" type="password" />
                      <fieldset aria-hidden="true" className="form-outline">
                        <legend className="css-14lo706">
                          <span>Password</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className='even-columns'>
                  <div className='terms-text'>
                    Use this email to log in to your <em>resumedone.io</em> account and receive notifications.
                  </div>
                </div>
              </div>

              <div className='form-profile-pic'>
                <img src='/img/profile.png' alt='profile' />
              </div>

            </div>
            <div className='even-columns'>
              <div className='btn-save'>
                Save
              </div>
            </div>
          </div>
        </section>

        <section >
          <div className='flex-column container' style={{ '--gap': '32px' }}>
            <div className='even-columns'>
              <div className='terms-checkbox-text'>
                <input type="checkbox" />
                Show my profile to serious employers on <em>hirethesbest.io</em> for free
              </div>
            </div>
            <div className='dlt-description'>
              <div className='flex-column' style={{ '--gap': '8px' }}>
                <div className='dlt-description-title'>
                  Delete account
                </div>
                <div className='dlt-description-body'>
                  If you delete your account you’ll be permanently removing it from our systems - you can’t undo it.
                </div>
              </div>
              <div className='dlt-description-footer'>
                Yes, Delete my account
              </div>
            </div>
          </div>
        </section>

        <section >
          <div className='flex-column container' style={{ '--gap': '16px' }}>
            <div className='terms-text'>
              <em>Get in touch with our support team</em> if you have any question or want to leave some feedback.
              We’ll be happy to hear from you.
            </div>
            <div className='hr-line'></div>
            <nav className='even-columns' style={{ '--gap': '32px', '--data-grid-template-columns': 'max-content max-content max-content max-content' }}>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <span>FAQ</span>
              <span>Contact Us</span>
            </nav>
          </div>
        </section>
      </main>
    </div >
  );
}

export default App;
