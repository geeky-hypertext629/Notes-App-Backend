const validateNote = (req, res, next) => {
    const { title, content } = req.body;
  
    // Validate title and content
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }
    else if(title.length<3 || content.length<3)
    {
        return res.status(400).json({ error: 'Title and content should be greater than length=3' });
    }
  
    // Add more validation logic if needed
  
    // Attach validated data to the request object
    req.validatedNote = { title, content };
  
    // Move to the next middleware or route handler
    next();
  };

  export {validateNote};