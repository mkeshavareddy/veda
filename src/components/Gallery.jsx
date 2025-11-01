import { useState } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { galleryImages } from '../data/gallery'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    let newIndex

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    }

    setSelectedImage(galleryImages[newIndex])
  }

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title text-primary">Gallery</h2>
        <p className="section-subtitle">
          A glimpse into our hospital, facilities, and community events
        </p>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openLightbox(item)}
            >
              {/* Placeholder for image */}
              <div className="aspect-square bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center relative">
                <div className="text-6xl text-white opacity-30">📷</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white text-sm opacity-90 capitalize">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl w-full max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <FaTimes className="text-3xl" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('prev')
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
              >
                <FaChevronLeft className="text-2xl" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('next')
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
              >
                <FaChevronRight className="text-2xl" />
              </button>

              {/* Image */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <div className="aspect-video bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center rounded-lg relative">
                  <div className="text-9xl text-white opacity-20">📷</div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-2xl mb-2">{selectedImage.title}</h3>
                    <p className="text-white text-sm opacity-90 capitalize">{selectedImage.category}</p>
                  </div>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white text-center">
                <p className="text-sm">
                  {galleryImages.findIndex(img => img.id === selectedImage.id) + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
