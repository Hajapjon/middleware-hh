const validateCreateAssignment = (req, res, next) => {
  console.log(req.body);

  if (!req.body.title) {
    return res.status(400).json({ message: "Title data is missing." });
  }

  if (req.body.content) {
    if (req.body.content.length < 50 || req.body.content.length > 1000) {
      return res.status(400).json({ message: "Content should have 500–1000 characters." });
    }
  } else {
    return res.status(400).json({ message: "Content data is missing." });
  }

  //Category

  if (req.body.category) {
    const hasCategory = ["Math", "English", "Biology"].includes(req.body.category);

    if (!hasCategory) {
      return res.status(400).json({ message: "Category must be either 'Math', 'English', or 'Biology'" });
    }
  } else {
    return res.status(400).json({ message: "Category data is missing." });
  }

  //Email
  if (req.body.email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(req.body.email)) {
      return res.status(400).json({ message: "Email format is invalid" });
    }
  } else {
    return res.status(400).json({ message: "Email data is missing.." });
  }

  next();
};
export default validateCreateAssignment;
