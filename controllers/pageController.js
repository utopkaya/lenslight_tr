const getIndexPage = (req, res) => {
    res.render("index")
}

const getAboutPage = (req, res) => {
    res.render("about")
}

const getBlogPage = (req, res) => {
    res.render("blog")
}

const getContactPage = (req, res) => {
    res.render("contact")
}

const getGalleryPage = (req, res) => {
    res.render("gallery")
}

const getProjectsPage = (req, res) => {
    res.render("projects")
}

const getServicesPage = (req, res) => {
    res.render("services")
}

export { getIndexPage, getAboutPage, getBlogPage, getContactPage, getGalleryPage, getProjectsPage, getServicesPage }