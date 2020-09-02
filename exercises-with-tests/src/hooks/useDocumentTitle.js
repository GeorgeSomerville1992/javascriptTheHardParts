import { useState, useEffect } from 'react';

const useDocumentTitle = (title) => {
  return {
    useDocumentTitle: useEffect(() => {
      // `Counter is ${counter}`
      console.log('useDocumentTitle one');
      window.document.title = title;
    }, [title])
  }
}

export default useDocumentTitle;
