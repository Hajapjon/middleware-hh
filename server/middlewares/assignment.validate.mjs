export const validateCreateAssignment = (req, res, next) => {
    const { title, content, category, email } = req.body;
    if (!title) {
      return res.status(400).json({
        message: "Title is required.",
      });
    }
  
    if (!content || content.length < 500 || content.length > 1000) {
      return res.status(400).json({
        message: "Content must be between 500 and 1000 characters.",
      });
    }
  
    const allowedCategories = ["Math", "English", "Biology"];
    if (!category || !allowedCategories.includes(category)) {
      return res.status(400).json({
        message: "Category must be one of: Math, English, or Biology.",
      });
    }
  
    if (!email) {
      return res.status(400).json({
        message: "Email is required.",
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Email format is invalid.",
      });
    }
    next();
  };
  
  