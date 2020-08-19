import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.imageio.ImageIO;

import org.jpedal.PdfDecoder;
import org.jpedal.exception.PdfException;
import org.jpedal.fonts.FontMappings;

public class PDFToImage {

	public static void main(String[] args) throws PdfException {
		// TODO Auto-generated method stub
		PdfDecoder decode_pdf = new PdfDecoder(true);


		//FontMappings.setFontReplacements();

		decode_pdf.openPdfFile("C:\\Users\\dasa5\\Downloads\\MATH-MATHEMATICSGEOMETRY-FOR-CLASS-TEN.pdf");


		 decode_pdf.setExtractionMode(0,800,3);

		 try {

		     for(int i=0;i<4;i++)
		     {  
		         BufferedImage img=decode_pdf.getPageAsImage(1+i);

		    ImageIO.write(img, "png",new File(String.valueOf(i)+"out.png"));
		     }
		} catch (IOException ex) {
		    //Logger.getLogger(NewJFrame.class.getName()).log(Level.SEVERE, null, ex);
		}

		    decode_pdf.closePdfFile();

		}

}
